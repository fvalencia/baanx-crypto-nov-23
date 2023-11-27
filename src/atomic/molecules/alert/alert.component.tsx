import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';
import React, { FC } from 'react';
import ExModal from 'react-native-modal';

import { StyledModalWrapper, TitleText } from './alert.component.style';

export interface AlertProps {
	open: boolean;
	message?: string;
	source?: Pick<AnimatedLottieViewProps, 'source'>;
	onAnimationFinish?: () => void;
}

/**
 * Alert Component
 *
 * @param open A boolean value to open the modal for the alert
 * @param source A valid source of animation if provided overrides the default one.
 * @param message A valid message to be displayed under the animation.
 * @param onAnimationFinish A callback funtion to be trigger after the animation ends.
 *
 * @returns Styled Alert Component.
 */
export const Alert: FC<AlertProps> = ({
	open,
	source,
	message,
	onAnimationFinish = () => {},
}) => {
	return (
		<ExModal
			isVisible={open}
			style={{ margin: 0 }}
			backdropTransitionOutTiming={0}
			animationIn="zoomIn"
			animationOut="zoomOut">
			<StyledModalWrapper>
				<LottieView
					source={source || require('./59945-success-confetti.json')}
					autoPlay
					loop={false}
					onAnimationFinish={onAnimationFinish}
				/>
				{message && <TitleText>{message}</TitleText>}
			</StyledModalWrapper>
		</ExModal>
	);
};
