import { BodySmall, CaptureButton } from '@atomic/atoms';
import { Platform } from 'react-native';
import Reanimated from 'react-native-reanimated';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { Camera } from 'react-native-vision-camera';
import styled from 'styled-components/native';

export const CONTENT_SPACING = 15;
export const SAFE_BOTTOM =
	Platform.select({
		ios: StaticSafeAreaInsets.safeAreaInsetsBottom,
	}) ?? 0;
export const SAFE_AREA_PADDING = {
	paddingLeft: StaticSafeAreaInsets.safeAreaInsetsLeft + CONTENT_SPACING,
	paddingTop: StaticSafeAreaInsets.safeAreaInsetsTop + CONTENT_SPACING,
	paddingRight: StaticSafeAreaInsets.safeAreaInsetsRight + CONTENT_SPACING,
	paddingBottom: SAFE_BOTTOM + CONTENT_SPACING,
};
export const SCALE_FULL_ZOOM = 3;
export const BUTTON_SIZE = 40;
export const MAX_ZOOM_FACTOR = 20;

export const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
	zoom: true,
});

export const CapturedButtonStyled = styled(CaptureButton)`
	position: absolute;
	align-self: center;
	bottom: ${SAFE_AREA_PADDING.paddingBottom}px;
`;

export const CameraContainer = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.color.black};
`;

export const RightButtonRowStyled = styled.View`
	position: absolute;
	right: ${SAFE_AREA_PADDING.paddingRight}px;
	top: ${SAFE_AREA_PADDING.paddingTop}px;
`;

export const RightButtonStyled = styled.Pressable`
	margin-bottom: ${CONTENT_SPACING}px;
	width: ${BUTTON_SIZE}px;
	height: ${BUTTON_SIZE}px;
	border-radius: ${BUTTON_SIZE / 2}px;
	background-color: 'rgba(140, 140, 140, 0.3)';
	justify-content: center;
	align-items: center;
`;
export const FpsTextStyled = styled(BodySmall)`
	color: ${({ theme }) => theme.color.white};
	text-align: center;
	font-weight: bold;
`;
