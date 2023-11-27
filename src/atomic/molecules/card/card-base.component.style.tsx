import styled from 'styled-components/native';

export const CardContainerStyled = styled.View`
	border-radius: ${({ theme }) => theme.border.radiusLarge};
	background-color: ${({ theme }) => theme.color.white};
`;
