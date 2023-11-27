import { H2 } from '@atomic/atoms';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('screen');

const _keySize = width / 6;
const _passcodeSpacing = (width - 3 * _keySize) / 2;

export const PassCodeKeyboardContainerStyle = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	padding-right: ${_passcodeSpacing}px;
	padding-left: ${_passcodeSpacing}px;
	align-items: center;
	margin-top: 10px;
`;

export const PassCodeKeyboardActionItemStyle = styled.TouchableOpacity`
	width: ${_keySize}px;
	height: ${_keySize}px;
	align-items: center;
	justify-content: center;
`;

export const PassCodeKeyboardItemTextStyle = styled(H2)`
	color: ${({ theme }) => theme.color.black};
`;

export const PassCodeSpaceKeyStyle = styled.View`
	width: ${_keySize}px;
`;
