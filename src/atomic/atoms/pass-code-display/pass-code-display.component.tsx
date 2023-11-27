import React, { FC } from 'react';
import Animated, {
	SharedValue,
	useAnimatedStyle,
	withSequence,
	withTiming,
	ZoomIn,
	ZoomOut,
} from 'react-native-reanimated';
import {
	PassCodeDisplayAnimatedStyled,
	PassCodeDisplayItemContainerStyle,
	PassCodeDisplayTextStyled,
} from './pass-code-display.style';
type PassCodeDisplayProps = {
	isValid: SharedValue<boolean>;
	passcode: Array<string | number>;
	passcodeSize: number;
	passcodeLength: number;
	correctPasscode: string;
};

export const PassCodeDisplay: FC<PassCodeDisplayProps> = ({
	isValid,
	passcode,
	passcodeLength,
	correctPasscode,
}) => {
	const passcodeContainerStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX:
						isValid.value === false &&
						passcode.length === passcodeLength &&
						passcode.join('') !== correctPasscode
							? withSequence(
									withTiming(0),
									withTiming(5, { duration: 100 }),
									withTiming(-5, { duration: 100 }),
									withTiming(5, { duration: 100 }),
									withTiming(-5, { duration: 100 }),
									withTiming(5, { duration: 100 }),
									withTiming(-5, { duration: 100 }),
									withTiming(5, { duration: 100 }),
									withTiming(0, { duration: 100 }),
							  )
							: 0,
				},
			],
		};
	});

	return (
		<Animated.View
			style={[
				{
					flexDirection: 'row',
					marginVertical: 20,
				},
				passcodeContainerStyle,
			]}>
			{[...Array(passcodeLength).keys()].map(i => {
				return (
					<PassCodeDisplayItemContainerStyle
						key={`passcode-${i}-${passcode[i]}`}
						item={i}>
						{passcode[i] && (
							<PassCodeDisplayAnimatedStyled
								entering={ZoomIn}
								exiting={ZoomOut}>
								<PassCodeDisplayTextStyled>
									{passcode[i]}
								</PassCodeDisplayTextStyled>
							</PassCodeDisplayAnimatedStyled>
						)}
					</PassCodeDisplayItemContainerStyle>
				);
			})}
		</Animated.View>
	);
};
