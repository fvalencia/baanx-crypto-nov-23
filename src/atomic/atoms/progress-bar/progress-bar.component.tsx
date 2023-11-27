import React, { FC, useEffect, useState } from 'react';
import { Animated, LayoutChangeEvent, View } from 'react-native';
import {
	AnimatedProgressBarStyled,
	ProgressBarContainerStyled,
} from './progress-bar.component.style';

export type ProgressBarProps = {
	initialStep?: number;
	step: number;
	steps: number;
};

/**
 * Progress Bar Component
 *
 * @param {number} initialStep - initial step
 * @param {number} step - current step
 * @param {number} steps - total steps
 *
 * @returns {React.ReactElement} Progress Bar Component
 *
 * @example
 *
 * <ProgressBar step={1} steps={3} />
 *
 * @see [ProgressBar docs](https://labs.mastercard.com/gitlab8/LaunchPad/launchpad-react-native-template-v2/wikis/progress-bar)
 *
 */
export const ProgressBar: FC<ProgressBarProps> = ({
	initialStep,
	step,
	steps,
}) => {
	const [width, setWidth] = React.useState(0);
	const animatedStep = React.useRef(new Animated.Value(-1000)).current;
	const [visible, setVisible] = useState(0);

	useEffect(() => {
		// Set Initial Step Location
		animatedStep.setValue(
			initialStep ? -width + (width * initialStep) / steps : -1000,
		);
		setVisible(1);
		Animated.timing(animatedStep, {
			toValue: -width + (width * step) / steps,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	}, [width, step]);

	return (
		<View>
			<ProgressBarContainerStyled
				onLayout={(e: LayoutChangeEvent) => {
					setWidth(e.nativeEvent.layout.width);
				}}>
				<AnimatedProgressBarStyled
					style={{
						opacity: visible,
						transform: [
							{
								translateX: animatedStep,
							},
						],
					}}
				/>
			</ProgressBarContainerStyled>
		</View>
	);
};
