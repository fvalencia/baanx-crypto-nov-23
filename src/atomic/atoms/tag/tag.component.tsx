import React, { ReactNode } from 'react';
import { TagContainerStyled, TagLabelStyled } from './tag.component.style';

export type TagKind =
	| 'primary'
	| 'secondary'
	| 'accessory'
	| 'neutral'
	| 'callToAction'
	| 'alert'
	| 'warning'
	| 'success';
type Size = 'regular' | 'small';

export type TagProps = {
	label: string;
	kind?: TagKind;
	size?: Size;
	iconPosition?: 'left' | 'right';
	stickTo?: 'left' | 'right' | 'none';
	children?: ReactNode;
};

/**
 *
 * @param label Required, A string to be shown as content.
 * @param kind Optional, The style to be applied to the tag. Default value is 'primary'.
 * @param size Optional, The size of the tag. Default value is 'regular'.
 * @param iconPosition Optional, The position is the icon inside the tag. Default value is 'left'.
 * @param children Optional, The children component to be combined with the label. Usually an <Icon ...> component.
 * @returns a styled Tag component.
 */
export const Tag = ({
	label,
	iconPosition = 'left',
	kind = 'primary',
	size = 'regular',
	stickTo = 'none',
	children,
}: TagProps) => {
	return (
		<TagContainerStyled
			iconPosition={iconPosition}
			kind={kind}
			size={size}
			stickTo={stickTo}>
			<TagLabelStyled size={size}>{label}</TagLabelStyled>
			{children}
		</TagContainerStyled>
	);
};
