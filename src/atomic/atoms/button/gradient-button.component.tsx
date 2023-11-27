import React, { FC, Fragment, useContext } from 'react';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { ThemeContext } from 'styled-components/native';

import {
	GradientBtnTextStyled,
	GradientButtonContainerStyled,
	StyledLottieView,
} from './gradient-button.component.style';

export type GradientKind = 'primary' | 'outline';
export type GradientSize = 'regular' | 'small';

export interface GradientButtonProp {
	title: string;
	onPress: () => void;
	icon?: string;
	kind?: GradientKind;
	disabled?: boolean;
	size?: GradientSize;
	processing?: boolean;
}

export const GradientButton: FC<GradientButtonProp> = ({
	title,
	onPress,
	kind,
	disabled,
	processing,
}) => {
	const theme = useContext(ThemeContext);
	return (
		<Fragment>
			<GradientButtonContainerStyled
				onPress={onPress}
				disabled={disabled || processing}
				activeOpacity={0.8}>
				{!processing && (
					<GradientBtnTextStyled kind={kind}>{title}</GradientBtnTextStyled>
				)}
				<StyledLottieView
					processing={processing}
					source={require('./procesing-animation.json')}
					autoPlay
					loop
				/>
				{!disabled && !processing && (
					<Svg height="55" width="100%">
						<Defs>
							<LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
								<Stop
									offset="0"
									stopColor={theme.color.primary}
									stopOpacity="1"
								/>
								<Stop
									offset="1"
									stopColor={theme.color.accessory}
									stopOpacity="1"
								/>
							</LinearGradient>
						</Defs>
						{kind === 'outline' ? (
							<Rect
								x="1.5"
								y="2"
								width="99%"
								height="50"
								rx="5"
								fill="white"
								stroke="url(#grad)"
								strokeWidth="3"
							/>
						) : (
							<Rect width="100%" height="55" rx="5" fill="url(#grad)" />
						)}
					</Svg>
				)}
			</GradientButtonContainerStyled>
		</Fragment>
	);
};
