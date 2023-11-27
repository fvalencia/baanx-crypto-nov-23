import styled from 'styled-components/native';

export const H1 = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xxxLarge};
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const H2 = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xLarge};
	line-height: ${({ theme }) => theme.lineHeight.xLarge};
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const H3 = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.large};
	line-height: ${({ theme }) => theme.lineHeight.large};
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const H3Bold = styled(H3)`
	font-family: ${({ theme }) => theme.fontFamily.bold};
`;

export const H4 = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.medium};
	line-height: ${({ theme }) => theme.lineHeight.medium};
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const H5 = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.small};
	line-height: ${({ theme }) => theme.lineHeight.small};
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const H5Bold = styled(H5)`
	font-family: ${({ theme }) => theme.fontFamily.bold};
`;

export const H6 = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
	line-height: ${({ theme }) => theme.lineHeight.xSmall};
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const H6Bold = styled(H6)`
	font-family: ${({ theme }) => theme.fontFamily.bold};
`;

export const Body = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.regular};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const BodyBold = styled(Body)`
	font-family: ${({ theme }) => theme.fontFamily.bold};
`;

export const BodySmall = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: 12px;
	color: ${({ theme }) => theme.color.grayXDark};
`;

export const Label = styled(BodySmall)`
	color: ${({ theme }) => theme.color.grayXDark};
	margin-bottom: ${({ theme }) => theme.spacing.small};
`;
