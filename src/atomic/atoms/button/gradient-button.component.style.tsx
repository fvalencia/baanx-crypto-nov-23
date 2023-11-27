import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { GradientButtonProp } from '..';

export const GradientButtonContainerStyled = styled.TouchableOpacity`
	position: relative;
	width: 100%;
	height: 55px;
	margin-top: 20px;
	background-color: ${({ theme, disabled }) =>
		disabled ? theme.color.grayLight : 'transparent'};
	border-radius: ${({ disabled }) => (disabled ? '5px' : '0px')};
	align-items: center;
	justify-content: center;
`;

export const GradientBtnTextStyled = styled.Text<Partial<GradientButtonProp>>`
	position: absolute;
	top: 12px;
	width: 100%;
	text-align: center;
	color: ${({ theme, kind }) =>
		kind === 'outline' ? theme.color.primary : theme.color.white};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
	z-index: 1;
`;

export const StyledLottieView = styled(LottieView)<Partial<GradientButtonProp>>`
	width: 100px;
	height: 100px;
	display: ${({ processing }) => (processing ? 'flex' : 'none')};
`;
