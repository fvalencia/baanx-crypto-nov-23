import styled from 'styled-components/native';

export const StyledModalWrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const TitleText = styled.Text`
	font-size: ${({ theme }) => theme.fontSize.medium};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	top: 130px;
	color: ${({ theme }) => theme.color.white};
`;
