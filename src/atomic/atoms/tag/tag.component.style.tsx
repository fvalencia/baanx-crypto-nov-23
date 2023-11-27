import { BodySmall } from '@atomic/atoms';
import styled from 'styled-components/native';
import { TagProps } from './tag.component';

export const TagContainerStyled = styled.View<Partial<TagProps>>`
	display: flex;
	flex-direction: ${({ iconPosition }) =>
		iconPosition == 'left' ? 'row-reverse' : 'row'};
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme, kind }) => theme.brand.green};
	padding: ${({ theme, size }) =>
		size === 'regular' ? theme.spacing.medium : theme.spacing.small};
	border-top-left-radius: ${({ theme, stickTo }) =>
		stickTo === 'left' ? 0 : theme.border.radiusXLarge};
	border-top-right-radius: ${({ theme, stickTo }) =>
		stickTo === 'right' ? 0 : theme.border.radiusXLarge};
	border-bottom-right-radius: ${({ theme, stickTo }) =>
		stickTo === 'right' ? 0 : theme.border.radiusXLarge};
	border-bottom-left-radius: ${({ theme, stickTo }) =>
		stickTo === 'left' ? 0 : theme.border.radiusXLarge};
`;

export const TagLabelStyled = styled(BodySmall)<Partial<TagProps>>`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme, size }) =>
		size === 'regular' ? theme.fontSize.xSmall : theme.fontSize.xxSmall};
	line-height: ${({ theme, size }) =>
		size === 'regular' ? theme.fontSize.xSmall : theme.fontSize.xxSmall};
	color: ${({ theme }) => theme.color.white};
`;
