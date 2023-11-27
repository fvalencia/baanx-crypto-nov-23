import styled from 'styled-components/native';

export const StyledView = styled.View`
	flex: 1;
`;

export const StyledHeader = styled.Text`
	padding: ${({ theme }) => theme.spacing.small};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
	line-height: ${({ theme }) => theme.fontSize.small};
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	text-align: center;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.color.grayLight};
`;

export const StyledItem = styled.Text`
	padding: ${({ theme }) => theme.spacing.medium};
	font-family: ${({ theme }) => theme.fontFamily.regular};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
	line-height: ${({ theme }) => theme.fontSize.small};
	color: ${({ theme }) => theme.color.black};
	text-align: center;
`;
