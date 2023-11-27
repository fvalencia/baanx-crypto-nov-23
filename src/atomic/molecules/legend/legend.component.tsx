import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Icon } from '@atomic/atoms';
import { StyledBodySmall, StyledLegendView } from './legend.component.style';

export interface LegendProps {
	iconName?: string;
	text: string;
	color?: string;
}

/**
 * Legend Component
 *
 * @returns Styled Legend
 */
export const Legend: FC<LegendProps> = ({
	iconName = 'alert-circle',
	text,
	color,
}) => {
	const theme = useContext(ThemeContext);
	const internalColor = color || theme.color.grayDark;
	return (
		<StyledLegendView>
			<Icon
				iconName={iconName}
				size={theme.iconSize.large}
				color={internalColor}
			/>
			<StyledBodySmall color={internalColor}>{text}</StyledBodySmall>
		</StyledLegendView>
	);
};
