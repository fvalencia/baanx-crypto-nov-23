import { Icon } from '@atomic/atoms';
import { useIsForeground } from '@hooks/useIsForeground';
import { useIsFocused } from '@react-navigation/native';
import React, {
	FC,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import {
	Alert,
	Image,
	PermissionsAndroid,
	Platform,
	StyleSheet,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native';
import { PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import {
	default as Animated,
	Easing,
	Extrapolate,
	default as Reanimated,
	interpolate,
	useAnimatedGestureHandler,
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import {
	CameraDeviceFormat,
	CameraRuntimeError,
	Camera as ExCamera,
	PhotoFile,
	VideoFile,
	frameRateIncluded,
	sortFormats,
	useCameraDevices,
} from 'react-native-vision-camera';
import {
	CameraContainer,
	MAX_ZOOM_FACTOR,
	ReanimatedCamera,
	RightButtonRowStyled,
	RightButtonStyled,
	SCALE_FULL_ZOOM,
} from './camera.style';

const requestOpenCamera = async (): Promise<boolean> => {
	if (Platform.OS !== 'android') {
		return true;
	}

	const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
	if (permission == null) {
		return false;
	}
	let hasPermission = await PermissionsAndroid.check(permission);
	if (!hasPermission) {
		const permissionRequestResult = await PermissionsAndroid.request(
			permission,
		);
		hasPermission = permissionRequestResult === 'granted';
	}
	return hasPermission;
};

type CameraProps = {
	isVisible: boolean;
	canSlideSide?: boolean;
	position?: 'front' | 'back';
	onCameraShape?: React.ReactNode;
	onMediaCapturedSuccessfuly: (
		media: PhotoFile | VideoFile,
		type: 'photo' | 'video',
	) => void;
};

/**
 * Camera component
 *
 * @param {type<'back' | 'front'>} position - camera position
 * @param {(media: type<PhotoFile | VideoFile>, type: type<'photo' | 'video'>,) => void} onMediaCapturedSuccessfuly - on media captured successfuly callback
 *
 * @returns {React.ReactElement} Camera component
 *
 * @example
 * <CameraV2
 *    position='back'
 *    onMediaCapturedSuccessfuly={(media, type) => console.log(media, type)}
 * />
 *
 */
export const Camera: FC<CameraProps> = ({
	isVisible,
	canSlideSide,
	position = 'back',
	onMediaCapturedSuccessfuly,
	onCameraShape,
}) => {
	const camera = useRef<ExCamera>(null);
	const [isCameraInitialized, setIsCameraInitialized] = useState(false);
	const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
	const zoom = useSharedValue(0);
	const isPressingButton = useSharedValue(false);

	// check if camera page is active
	const isFocussed = useIsFocused();
	const isForeground = useIsForeground();
	const isActive = isFocussed && isForeground;

	const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
		position,
	);
	const [flash, setFlash] = useState<'off' | 'on'>('off');

	// camera format settings
	const devices = useCameraDevices();
	const device = devices[cameraPosition];
	const formats = useMemo<CameraDeviceFormat[]>(() => {
		if (device?.formats == null) {
			return [];
		}
		return device.formats.sort(sortFormats);
	}, [device?.formats]);
	const fps = 30;
	const supportsCameraFlipping = canSlideSide;

	const supportsFlash = device?.hasFlash ?? false;
	const format = useMemo(() => {
		let result = formats;

		// find the first format that includes the given FPS
		return result.find(f =>
			f.frameRateRanges.some(r => frameRateIncluded(r, fps)),
		);
	}, [formats, fps]);

	// This just maps the zoom factor to a percentage value.
	// so e.g. for [min, neutr., max] values [1, 2, 128] this would result in [0, 0.0081, 1]
	const minZoom = device?.minZoom ?? 1;
	const maxZoom = Math.min(device?.maxZoom ?? 1, MAX_ZOOM_FACTOR);

	const cameraAnimatedProps = useAnimatedProps(() => {
		const z = Math.max(Math.min(zoom.value, maxZoom), minZoom);
		return {
			zoom: z,
		};
	}, [maxZoom, minZoom, zoom]);

	const setIsPressingButton = useCallback(
		(_isPressingButton: boolean) => {
			isPressingButton.value = _isPressingButton;
		},
		[isPressingButton],
	);

	const onError = useCallback((error: CameraRuntimeError) => {
		console.error(error);
	}, []);

	const onInitialized = useCallback(() => {
		setIsCameraInitialized(true);
	}, []);

	// const onMediaCaptured = useCallback(
	// 	(media: PhotoFile | VideoFile, type: 'photo' | 'video') => {
	// 		onMediaCapturedSuccessfuly(media, type);
	// 	},
	// 	[onMediaCapturedSuccessfuly],
	// );

	const onFlipCameraPressed = useCallback(() => {
		setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
	}, []);

	const onFlashPressed = useCallback(() => {
		setFlash(f => (f === 'off' ? 'on' : 'off'));
	}, []);

	const onDoubleTap = useCallback(() => {
		onFlipCameraPressed();
	}, [onFlipCameraPressed]);

	const neutralZoom = device?.neutralZoom ?? 1;
	useEffect(() => {
		// Run everytime the neutralZoomScaled value changes. (reset zoom when device changes)
		zoom.value = neutralZoom;
	}, [neutralZoom, zoom]);

	useEffect(() => {
		ExCamera.getMicrophonePermissionStatus().then(status =>
			setHasMicrophonePermission(status === 'authorized'),
		);
		requestOpenCamera()
			.then(status => console.log('Save permission status:', status))
			.catch(e => {
				console.error(e);
				Alert.alert(
					'Permission denied!',
					'Camera does not have permission to open.',
				);
			});
	}, []);

	// The gesture handler maps the linear pinch gesture (0 - 1) to an exponential curve since a camera's zoom
	// function does not appear linear to the user. (aka zoom 0.1 -> 0.2 does not look equal in difference as 0.8 -> 0.9)
	const onPinchGesture = useAnimatedGestureHandler<
		PinchGestureHandlerGestureEvent,
		{ startZoom?: number }
	>({
		onStart: (_, context) => {
			context.startZoom = zoom.value;
		},
		onActive: (event, context) => {
			// we're trying to map the scale gesture to a linear zoom here
			const startZoom = context.startZoom ?? 0;
			const scale = interpolate(
				event.scale,
				[1 - 1 / SCALE_FULL_ZOOM, 1, SCALE_FULL_ZOOM],
				[-1, 0, 1],
				Extrapolate.CLAMP,
			);
			zoom.value = interpolate(
				scale,
				[-1, 0, 1],
				[minZoom, startZoom, maxZoom],
				Extrapolate.CLAMP,
			);
		},
	});

	if (device != null && format != null) {
		console.log(
			`Re-rendering camera page with ${
				isActive ? 'active' : 'inactive'
			} camera. ` +
				`Device: "${device.name}" (${format.photoWidth}x${format.photoHeight} @ ${fps}fps)`,
		);
	} else {
		console.log('re-rendering camera page without active camera');
	}

	const { height: screenHeight } = useWindowDimensions();
	const cameraOffset = useSharedValue(screenHeight);
	const animatedCameraStyles = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: cameraOffset.value }],
		};
	});

	useEffect(() => {
		if (isVisible) {
			cameraOffset.value = withTiming(0, {
				duration: 300,
				easing: Easing.linear,
			});
		} else {
			cameraOffset.value = withTiming(screenHeight, {
				duration: 300,
				easing: Easing.linear,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);

	return (
		<Animated.View style={[StyleSheet.absoluteFill, animatedCameraStyles]}>
			<CameraContainer>
				{device != null && (
					<Reanimated.View style={StyleSheet.absoluteFill}>
						<ReanimatedCamera
							ref={camera}
							style={StyleSheet.absoluteFill}
							device={device}
							format={format}
							fps={fps}
							hdr={false}
							isActive={isActive}
							onInitialized={onInitialized}
							onError={onError}
							enableZoomGesture={false}
							animatedProps={cameraAnimatedProps}
							photo={true}
							video={true}
							audio={hasMicrophonePermission}
							orientation="portrait"
						/>
					</Reanimated.View>
				)}
				<TouchableOpacity
					activeOpacity={0.6}
					style={{
						position: 'absolute',
						bottom: 10,
						alignSelf: 'center',
						zIndex: 300,
					}}
					onPress={() => {
						onMediaCapturedSuccessfuly({ path: '' } as PhotoFile, 'photo');
					}}>
					<Image
						source={require('../../../assets/images/components/camera/camera_picture.png')}
						style={{
							width: 60,
							height: 60,
						}}
					/>
					{/* TODO Fix this temp solution it wasn't working
					<CapturedButtonStyled
						camera={camera}
						onMediaCaptured={onMediaCapturedSuccessfuly}
						cameraZoom={zoom}
						minZoom={minZoom}
						maxZoom={maxZoom}
						flash={supportsFlash ? flash : 'off'}
						enabled={isCameraInitialized && isActive}
						setIsPressingButton={setIsPressingButton}
					/> */}
				</TouchableOpacity>
				<RightButtonRowStyled>
					{supportsCameraFlipping && (
						<RightButtonStyled onPress={onFlipCameraPressed}>
							<Icon
								iconFamily="ionicons"
								iconName="camera-reverse"
								color="white"
								size={24}
							/>
						</RightButtonStyled>
					)}
					{supportsFlash && (
						<RightButtonStyled onPress={onFlashPressed}>
							<Icon
								iconFamily="ionicons"
								iconName={flash === 'on' ? 'flash' : 'flash-off'}
								color="white"
								size={24}
							/>
						</RightButtonStyled>
					)}
				</RightButtonRowStyled>
				{onCameraShape}
			</CameraContainer>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	camera: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 100,
		padding: 0,
	},
});
