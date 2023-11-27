import React, { FC, useContext } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { ThemeContext } from 'styled-components/native';

import { StyledView } from './header-background.component.style';

interface HeaderBackgroundProps {
	style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}

/**
 * HeaderBackground Component
 *
 * @returns Styled HeaderBackground Component.
 */
export const HeaderBackground: FC<HeaderBackgroundProps> = () => {
	const theme = useContext(ThemeContext);
	return (
		<StyledView>
			<Svg height="100%" width="100%">
				<Defs>
					<LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
						<Stop offset="0" stopColor={theme.color.primary} stopOpacity="1" />
						<Stop
							offset="1"
							stopColor={theme.color.secondary}
							stopOpacity="1"
						/>
					</LinearGradient>
				</Defs>
				<Rect width="100%" height="100%" fill="url(#grad)" />
			</Svg>
		</StyledView>
	);
};
