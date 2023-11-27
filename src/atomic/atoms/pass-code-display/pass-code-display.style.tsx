import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const width = 300;

const keySize = width / 6;
const passcodeLength = 6;
const passCodeSize = width / (passcodeLength + 2);
const passcodeSpacing = (width - 3 * keySize) / 2;

export const PassCodeDisplayItemContainerStyle = styled.View<{ item: number }>`
	width: ${passCodeSize}px;
	height: ${passCodeSize}px;
	border-radius: ${passCodeSize}px;
	background-color: rgba(0, 0, 0, 0.1);
	margin-left: ${({ item }) => (item === 0 ? 0 : passCodeSize / 4)}px;
`;

export const PassCodeDisplayAnimatedStyled = styled(Animated.View)`
	flex: 1;
	align-items: center;
	justify-content: center;
	border-radius: ${passCodeSize}px;
	background-color: ${({ theme }) => theme.color.primary};
`;

export const PassCodeDisplayTextStyled = styled.Text`
	color: ${({ theme }) => theme.color.white};
	font-family: ${({ theme }) => theme.fontFamily.regular};
	font-size: ${passCodeSize / 2}px;
	font-weight: 700;
`;

export const PassCodeDisplayDescriptionStyled = styled.Text`
	padding: 0 ${passcodeSpacing * 2}px;
	font-family: ${({ theme }) => theme.fontFamily.regular};
	font-size: ${({ theme }) => theme.fontSize.xxSmall};
	color: rgba(0, 0, 0, 0.3);
	text-align: center;
`;
