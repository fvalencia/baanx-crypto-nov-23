import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ProgressBarContainerStyled = styled.View`
	background-color: rgba(0, 0, 0, 0.1);
	height: 10px;
	overflow: hidden;
	border-radius: 10px;
`;

export const AnimatedProgressBarStyled = styled(Animated.View)`
	background-color: ${({ theme }) => theme.color.primary};
	height: 10px;
	overflow: hidden;
	border-radius: 10px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;
