import { Body } from '@atomic/atoms';
import styled from 'styled-components/native';
import { ListElementProps } from '..';

export const StyledlWrapper = styled.View<Partial<ListElementProps>>`
	background-color: ${({ theme }) => theme.color.white};
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme }) => theme.color.grayLight};
	padding: 8px;
	padding-left: 14px;
	padding-right: 14px;
	min-height: ${({ otherSubtitle }) => (otherSubtitle ? '94px' : '74px')};
`;

export const StyledView = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex: 1;
`;

export const StyledTitleView = styled.View`
	justify-content: center;
`;

export const StyledRightView = styled.View`
	justify-content: center;
	align-items: center;
	padding-left: 10px;
`;

export const StyledViewParent = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;

export const TitleText = styled(Body)`
	color: ${({ theme }) => theme.color.grayXDark};
	font-size: 16px;
`;

export const Subtitle = styled(Body)`
	font-size: 14px;
	margin-top: 5px;
`;

export const Subtitle1 = styled(Subtitle)`
	color: ${({ theme }) => theme.color.gray};
`;

export const Subtitle2 = styled(Subtitle)`
	color: ${({ theme }) => theme.color.secondary};
`;

export const StyledImage = styled.Image`
	width: 40px;
	height: 40px;
	margin-right: 20px;
`;
