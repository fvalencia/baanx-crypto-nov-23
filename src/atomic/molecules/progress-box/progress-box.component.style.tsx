import styled from 'styled-components/native';

export const Container = styled.View`
	flex-direction: row;
`;

export const ViewElement = styled.View<{
	boxes: number;
	fill: number;
	element: number;
}>`
	width: ${({ boxes }) => 100 / boxes}%;
	height: 8px;
	background-color: ${({ theme, fill, element }) =>
		element < fill ? theme.brand.green : theme.color.grayLight};
	margin-right: ${({ element, boxes }) =>
		element === boxes - 1 ? '0px' : '7px'};
	flex: 1;
	border-bottom-left-radius: ${({ element }) =>
		element === 0 ? '4px' : '0px'};
	border-top-left-radius: ${({ element }) => (element === 0 ? '4px' : '0px')};
	border-top-right-radius: ${({ element, boxes }) =>
		element === boxes - 1 ? '4px' : '0px'};
	border-bottom-right-radius: ${({ element, boxes }) =>
		element === boxes - 1 ? '4px' : '0px'};
`;
