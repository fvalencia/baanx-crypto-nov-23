import React, { FC } from 'react';
import {
	ImageSourcePropType,
	TouchableWithoutFeedback,
	ViewStyle,
} from 'react-native';

import {
	StyledImage,
	StyledlWrapper,
	StyledRightView,
	StyledTitleView,
	StyledView,
	StyledViewParent,
	Subtitle1,
	Subtitle2,
	TitleText,
} from './list-element.component.style';

export interface ListElementProps {
	title: string;
	subtitle?: string;
	otherSubtitle?: string;
	rightComponent?: React.ReactNode;
	leftComponent?: React.ReactNode;
	leftImage?: ImageSourcePropType;
	onPress?: () => void;
	style?: ViewStyle;
}

/**
 * ListElement Component
 *
 * @param title - A valid title to be displayed in the left side of the list element.
 * @param subtitle - A valid subtitle to be displayed underneeth the title.
 * @param otherSubtitle - A valid title to be displayed underneeth the subtitle.
 * @param rightComponent - A valid React Node to be displayed on the right side of the list element.
 * @param leftImage - An image source to be displayed in the left part next to the title.
 * @param onPress - A callback to be trigger when pressing the list element.
 *
 * @returns Styled ListElement
 */
export const ListElement: FC<ListElementProps> = ({
	title,
	subtitle,
	otherSubtitle,
	rightComponent,
	leftImage,
	leftComponent,
	onPress,
	style = {},
}) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<StyledlWrapper otherSubtitle={otherSubtitle} style={{ ...style }}>
				<StyledViewParent>
					<StyledView>
						{leftImage ? (
							<StyledImage source={leftImage} />
						) : leftComponent ? (
							leftComponent
						) : null}
						<StyledTitleView>
							<TitleText>{title}</TitleText>
							{subtitle && <Subtitle1>{subtitle}</Subtitle1>}
							{otherSubtitle && <Subtitle2>{otherSubtitle}</Subtitle2>}
						</StyledTitleView>
					</StyledView>
					<StyledRightView>{rightComponent}</StyledRightView>
				</StyledViewParent>
			</StyledlWrapper>
		</TouchableWithoutFeedback>
	);
};
