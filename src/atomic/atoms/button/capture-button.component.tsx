import React, {
	FC,
	memo,
	ReactElement,
	RefObject,
	useCallback,
	useMemo,
	useRef,
} from 'react';
import {
	Dimensions,
	Platform,
	StyleSheet,
	View,
	ViewProps,
} from 'react-native';
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
	State,
	TapGestureHandler,
	TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Reanimated, {
	cancelAnimation,
	Easing,
	Extrapolate,
	interpolate,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import type {
	Camera,
	PhotoFile,
	TakePhotoOptions,
	TakeSnapshotOptions,
	VideoFile,
} from 'react-native-vision-camera';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Platform.select<number>({
	android:
		Dimensions.get('screen').height - StaticSafeAreaInsets.safeAreaInsetsBottom,
	ios: Dimensions.get('window').height,
}) as number;

// Capture Button
const CAPTURE_BUTTON_SIZE = 78;

const PAN_GESTURE_HANDLER_FAIL_X = [-SCREEN_WIDTH, SCREEN_WIDTH];
const PAN_GESTURE_HANDLER_ACTIVE_Y = [-2, 2];

const START_RECORDING_DELAY = 200;
const BORDER_WIDTH = CAPTURE_BUTTON_SIZE * 0.1;

interface Props extends ViewProps {
	camera: RefObject<Camera>;
	onMediaCaptured: (
		media: PhotoFile | VideoFile,
		type: 'photo' | 'video',
	) => void;

	minZoom: number;
	maxZoom: number;
	cameraZoom: Reanimated.SharedValue<number>;

	flash: 'off' | 'on';

	enabled: boolean;

	setIsPressingButton: (isPressingButton: boolean) => void;
}

const _CaptureButton: FC<Props> = ({
	camera,
	onMediaCaptured,
	minZoom,
	maxZoom,
	cameraZoom,
	flash,
	enabled,
	setIsPressingButton,
	style,
	...props
}): ReactElement => {
	const pressDownDate = useRef<Date | undefined>(undefined);
	const isRecording = useRef(false);
	const recordingProgress = useSharedValue(0);
	const takePhotoOptions = useMemo<TakePhotoOptions & TakeSnapshotOptions>(
		() => ({
			photoCodec: 'jpeg',
			qualityPrioritization: 'speed',
			flash: flash,
			quality: 90,
			skipMetadata: true,
		}),
		[flash],
	);
	const isPressingButton = useSharedValue(false);

	const takePhoto = useCallback(async () => {
		try {
			if (camera.current == null) {
				throw new Error('Camera ref is null!');
			}
			const photo = await camera.current.takePhoto(takePhotoOptions);
			onMediaCaptured(photo, 'photo');
		} catch (e) {
			console.error('Failed to take photo!', e);
		}
	}, [camera, onMediaCaptured, takePhotoOptions]);

	const onStoppedRecording = useCallback(() => {
		isRecording.current = false;
		cancelAnimation(recordingProgress);
	}, [recordingProgress]);

	const stopRecording = useCallback(async () => {
		try {
			if (camera.current == null) {
				throw new Error('Camera ref is null!');
			}

			await camera.current.stopRecording();
		} catch (e) {
			console.error('failed to stop recording!', e);
		}
	}, [camera]);

	const startRecording = useCallback(() => {
		try {
			if (camera.current == null) {
				throw new Error('Camera ref is null!');
			}

			camera.current.startRecording({
				flash: flash,
				onRecordingError: error => {
					console.error('Recording failed!', error);
					onStoppedRecording();
				},
				onRecordingFinished: video => {
					onMediaCaptured(video, 'video');
					onStoppedRecording();
				},
			});
			isRecording.current = true;
		} catch (e) {
			console.error('failed to start recording!', e, 'camera');
		}
	}, [camera, flash, onMediaCaptured, onStoppedRecording]);

	const tapHandler = useRef<TapGestureHandler>();
	const onHandlerStateChanged = useCallback(
		async ({ nativeEvent: event }: TapGestureHandlerStateChangeEvent) => {
			// This is the gesture handler for the circular "shutter" button.
			// Once the finger touches the button (State.BEGAN), a photo is being taken and "capture mode" is entered. (disabled tab bar)
			// Also, we set `pressDownDate` to the time of the press down event, and start a 200ms timeout. If the `pressDownDate` hasn't changed
			// after the 200ms, the user is still holding down the "shutter" button. In that case, we start recording.
			//
			// Once the finger releases the button (State.END/FAILED/CANCELLED), we leave "capture mode" (enable tab bar) and check the `pressDownDate`,
			// if `pressDownDate` was less than 200ms ago, we know that the intention of the user is to take a photo. We check the `takePhotoPromise` if
			// there already is an ongoing (or already resolved) takePhoto() call (remember that we called takePhoto() when the user pressed down), and
			// if yes, use that. If no, we just try calling takePhoto() again
			switch (event.state) {
				case State.BEGAN: {
					// enter "recording mode"
					recordingProgress.value = 0;
					isPressingButton.value = true;
					const now = new Date();
					pressDownDate.current = now;
					setTimeout(() => {
						if (pressDownDate.current === now) {
							// user is still pressing down after 200ms, so his intention is to create a video
							startRecording();
						}
					}, START_RECORDING_DELAY);
					setIsPressingButton(true);
					return;
				}
				case State.END:
				case State.FAILED:
				case State.CANCELLED: {
					// exit "recording mode"
					try {
						if (pressDownDate.current == null) {
							throw new Error('PressDownDate ref .current was null!');
						}
						const now = new Date();
						const diff = now.getTime() - pressDownDate.current.getTime();
						pressDownDate.current = undefined;
						if (diff < START_RECORDING_DELAY) {
							// user has released the button within 200ms, so his intention is to take a single picture.
							await takePhoto();
						} else {
							// user has held the button for more than 200ms, so he has been recording this entire time.
							await stopRecording();
						}
					} finally {
						setTimeout(() => {
							isPressingButton.value = false;
							setIsPressingButton(false);
						}, 500);
					}
					return;
				}
				default:
					break;
			}
		},
		[
			isPressingButton,
			recordingProgress,
			setIsPressingButton,
			startRecording,
			stopRecording,
			takePhoto,
		],
	);

	const panHandler = useRef<PanGestureHandler>();
	const onPanGestureEvent = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		{ offsetY?: number; startY?: number }
	>({
		onStart: (event, context) => {
			context.startY = event.absoluteY;
			const yForFullZoom = context.startY * 0.7;
			const offsetYForFullZoom = context.startY - yForFullZoom;

			// extrapolate [0 ... 1] zoom -> [0 ... Y_FOR_FULL_ZOOM] finger position
			context.offsetY = interpolate(
				cameraZoom.value,
				[minZoom, maxZoom],
				[0, offsetYForFullZoom],
				Extrapolate.CLAMP,
			);
		},
		onActive: (event, context) => {
			const offset = context.offsetY ?? 0;
			const startY = context.startY ?? SCREEN_HEIGHT;
			const yForFullZoom = startY * 0.7;

			cameraZoom.value = interpolate(
				event.absoluteY - offset,
				[yForFullZoom, startY],
				[maxZoom, minZoom],
				Extrapolate.CLAMP,
			);
		},
	});

	const shadowStyle = useAnimatedStyle(
		() => ({
			transform: [
				{
					scale: withSpring(isPressingButton.value ? 1 : 0, {
						mass: 1,
						damping: 35,
						stiffness: 300,
					}),
				},
			],
		}),
		[isPressingButton],
	);

	const buttonStyle = useAnimatedStyle(() => {
		let scale: number;
		if (enabled) {
			if (isPressingButton.value) {
				scale = withRepeat(
					withSpring(1, {
						stiffness: 100,
						damping: 1000,
					}),
					-1,
					true,
				);
			} else {
				scale = withSpring(0.9, {
					stiffness: 500,
					damping: 300,
				});
			}
		} else {
			scale = withSpring(0.6, {
				stiffness: 500,
				damping: 300,
			});
		}

		return {
			opacity: withTiming(enabled ? 1 : 0.3, {
				duration: 100,
				easing: Easing.linear,
			}),
			transform: [
				{
					scale: scale,
				},
			],
		};
	}, [enabled, isPressingButton]);

	return (
		<TapGestureHandler
			enabled={enabled}
			ref={tapHandler}
			onHandlerStateChange={onHandlerStateChanged}
			shouldCancelWhenOutside={false}
			maxDurationMs={99999999} // <-- this prevents the TapGestureHandler from going to State.FAILED when the user moves his finger outside of the child view (to zoom)
			simultaneousHandlers={panHandler}>
			<Reanimated.View {...props} style={[buttonStyle, style]}>
				<PanGestureHandler
					enabled={enabled}
					ref={panHandler}
					failOffsetX={PAN_GESTURE_HANDLER_FAIL_X}
					activeOffsetY={PAN_GESTURE_HANDLER_ACTIVE_Y}
					onGestureEvent={onPanGestureEvent}
					simultaneousHandlers={tapHandler}>
					<Reanimated.View style={styles.flex}>
						<Reanimated.View style={[styles.shadow, shadowStyle]} />
						<View style={styles.button} />
					</Reanimated.View>
				</PanGestureHandler>
			</Reanimated.View>
		</TapGestureHandler>
	);
};

export const CaptureButton = memo(_CaptureButton);

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	shadow: {
		position: 'absolute',
		width: CAPTURE_BUTTON_SIZE,
		height: CAPTURE_BUTTON_SIZE,
		borderRadius: CAPTURE_BUTTON_SIZE / 2,
		backgroundColor: '#e34077',
	},
	button: {
		width: CAPTURE_BUTTON_SIZE,
		height: CAPTURE_BUTTON_SIZE,
		borderRadius: CAPTURE_BUTTON_SIZE / 2,
		borderWidth: BORDER_WIDTH,
		borderColor: 'white',
	},
});
