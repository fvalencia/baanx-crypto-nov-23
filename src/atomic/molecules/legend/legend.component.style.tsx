import { BodySmall } from '@atomic/atoms';
import styled from 'styled-components/native';

export const StyledLegendView = styled.View`
	flex-direction: row;
	margin-top: 10px;
`;

export const StyledBodySmall = styled(BodySmall)<{ color: string }>`
	color: ${({ color }) => color};
	margin-left: 6px;
	text-align: left;
`;
