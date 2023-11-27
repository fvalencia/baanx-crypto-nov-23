import React, { FC } from 'react';

import {
	Container,
	StyledIcon,
	StyledSmallBody,
	StyledText,
	TouchableViewContainer,
} from './section.component.style';

export type SectionBackground = 'primary' | 'gray';
export interface SectionProps {
	label: string;
	actionLabel?: string;
	background?: SectionBackground;
	view?: boolean;
	onPress?: () => void;
}

/**
 * Section Component
 *
 * @param label - a valid string to be displayed as the section label.
 * @param background - a valid kind of background.
 * @param view - a boolean that displays or not the view link.
 * @param onPress - a callback executed when view is pressed.
 *
 * @returns Styled Section Component
 */
export const Section: FC<SectionProps> = ({
	label,
	actionLabel = 'View',
	background,
	view,
	onPress,
}) => {
	return (
		<Container view={view} background={background}>
			<StyledText view={view} background={background}>
				{label}
			</StyledText>
			{view ? (
				<TouchableViewContainer onPress={onPress}>
					<StyledSmallBody background={background}>
						{actionLabel}
					</StyledSmallBody>
					<StyledIcon
						iconName="arrow-ios-right"
						color={background || ''}
						size={0}
					/>
				</TouchableViewContainer>
			) : null}
		</Container>
	);
};
