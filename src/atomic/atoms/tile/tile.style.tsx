import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { TileProps } from './tile.component';

const { width } = Dimensions.get('window');

export const TileContainerStyled = styled.Pressable<Partial<TileProps>>`
	position: relative;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: ${({ dividedBy = 3 }) => width / dividedBy - 16}px;
	padding: 20px;
	margin: 8px;
	background-color: ${({ theme }) => theme.color.white};
	border-radius: 6px;
	border-color: ${({ theme, selected }) =>
		selected ? theme.color.primary : theme.color.gray};
	border-width: 4px;
`;

export const CheckContainerStyled = styled.View`
	position: absolute;
	top: -10px;
	right: -10px;
`;
