import { BodyBold } from '@atomic/atoms';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { CardContainerStyled } from './card-base.component.style';

const { width } = Dimensions.get('screen');
const CARD_WIDE_WIDTH = width * 0.6;
const CARD_WIDE_HEIGHT = width * 0.53;
const CARD_WIDE_SPACING = 16;
const CARD_WIDE_FULLSIZE = CARD_WIDE_WIDTH + CARD_WIDE_SPACING * 2;

export const CardWideContainerStyled = styled(CardContainerStyled)`
	width: ${CARD_WIDE_WIDTH}px;
	min-height: ${CARD_WIDE_HEIGHT}px;
	margin: ${CARD_WIDE_SPACING}px;
	border-radius: ${({ theme }) => theme.border.radiusLarge};
	background-color: ${({ theme }) => theme.color.white};
`;

export const CardWideHeaderStyled = styled.Image`
	width: 100%;
	height: ${CARD_WIDE_HEIGHT * 0.5}px;
	border-top-left-radius: ${({ theme }) => theme.border.radiusLarge};
	border-top-right-radius: ${({ theme }) => theme.border.radiusLarge};
`;

export const CardWideBodyStyled = styled.View`
	width: 100%;
	height: ${CARD_WIDE_HEIGHT * 0.7}px;
	border-bottom-left-radius: ${({ theme }) => theme.border.radiusLarge};
	border-bottom-right-radius: ${({ theme }) => theme.border.radiusLarge};
	padding: ${({ theme }) => theme.spacing.medium};
`;

export const CardWideTitle = styled(BodyBold)``;

export const CardWideDescription = styled(BodyBold)`
	font-family: ${({ theme }) => theme.fontFamily.medium};
	font-size: ${({ theme }) => theme.fontSize.xxSmall};
	color: ${({ theme }) => theme.color.grayDark};
`;

export const CardWideTagContainer = styled.View`
	width: 130px;
	position: absolute;
	top: 18px;
	left: 0;
	z-index: 10;
`;
