import { Body, H1 } from '@atomic/atoms';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen');
const SIZE = width - 75;

export const SlideContainerStyled = styled.View`
	position: absolute;
	left: 0px;
	right: 0px;
	top: 0px;
	bottom: 0px;
	padding: 75px;
	padding-top: 150px;
	align-items: center;
`;

export const SlideImageStyled = styled.Image`
	width: ${SIZE}px;
	height: ${SIZE}px;
`;

export const SlideTitleStyled = styled(H1)`
	color: ${({ theme }) => theme.color.white};
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spacing.medium};
	font-weight: bold;
`;

export const SlideDescriptionStyled = styled(Body)`
	color: ${({ theme }) => theme.color.white};
	text-align: center;
`;

export const SlideStyled = styled.View``;
