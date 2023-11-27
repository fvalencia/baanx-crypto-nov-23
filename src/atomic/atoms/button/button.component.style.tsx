import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { Icon } from '../icon/icon.component';
import { ButtonProp } from './button.component';

export const ButtonContainer = styled.TouchableOpacity<Partial<ButtonProp>>`
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
	flex-shrink: 1;
	height: ${({ size }) => (size === 'regular' ? '48px' : '36px')};
	background-color: ${({ theme, kind, disabled }) =>
		kind === 'primary'
			? disabled
				? theme.color.grayLight
				: theme.brand.yellow
			: kind === 'secondary'
			? 'transparent'
			: kind === 'tertiary'
			? theme.color.callToAction
			: 'transparent'};
	border-radius: 24px;
	border: 2px solid
		${({ theme, kind, disabled }) =>
			kind === 'primary'
				? disabled
					? theme.color.grayLight
					: theme.brand.yellow
				: kind === 'secondary'
				? disabled
					? theme.color.grayLight
					: theme.color.primary
				: kind === 'tertiary'
				? theme.color.callToAction
				: 'transparent'};
`;

export const ButtonText = styled.Text<Partial<ButtonProp>>`
	color: ${({ theme, kind, disabled }) =>
		kind === 'primary'
			? disabled
				? theme.color.white
				: theme.color.primary
			: kind === 'secondary'
			? disabled
				? theme.color.grayLight
				: theme.color.primary
			: kind === 'tertiary'
			? theme.color.white
			: theme.color.primary};
	font-family: ${({ theme }) => theme.fontFamily.bold};
	text-transform: uppercase;
	font-size: ${({ theme, size }) =>
		size === 'regular' ? theme.fontSize.xSmall : theme.fontSize.xxSmall};
	line-height: ${({ theme, size }) =>
		size === 'regular' ? theme.fontSize.xSmall : theme.fontSize.xxSmall};
`;

export const StyledLottieView = styled(LottieView)<Partial<ButtonProp>>`
	width: 100px;
	height: 100px;
	display: ${({ processing }) => (processing ? 'flex' : 'none')};
`;

export const StyledIcon = styled(Icon)`
	margin-left: 16px;
`;
