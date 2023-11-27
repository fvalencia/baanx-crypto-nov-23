import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Body, H5, Icon } from '@atomic/atoms';
import { ModalProps } from './modal.component';

import { getStatusBarHeight } from '@utils/StatusBarUtils';

const { height } = Dimensions.get('window');
const statusBarHeight = getStatusBarHeight();
const MODAL_HEIGHT = height - statusBarHeight;

export const LoginModalContainerStyled = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	margin-top: ${statusBarHeight}px;
	background-color: ${({ theme }) => theme.color.grayXLight};
`;

export const LoginModalContentStyled = styled.View`
	width: 100%;
	height: ${MODAL_HEIGHT}px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const StyledModalWrapper = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const BaseModal = styled.View<Partial<ModalProps>>`
	background-color: ${({ theme }) => theme.color.white};
	justify-content: center;
	align-items: center;
	padding: 20px;
	padding-top: ${({ hideSuccessIcon }) => (hideSuccessIcon ? '20px' : '40px')};
	position: relative;
`;

export const NotificationModal = styled(BaseModal)`
	width: 90%;
	border-radius: 10px;
`;

export const SlideModal = styled(BaseModal)`
	width: 100%;
	bottom: 0;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	position: absolute;
	padding-bottom: 20px;
	padding-top: 10px;
`;

export const StyledCloseContainer = styled.View`
	position: absolute;
	right: 20px;
	top: 20px;
`;

export const TitleText = styled(H5)`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	margin-top: 24px;
	margin-bottom: 24px;
	text-align: center;
`;

export const ContentText = styled(Body)`
	color: ${({ theme }) => theme.color.grayDark};
	font-size: 18px;
	margin-bottom: 24px;
	text-align: center;
`;

export const IconWrapper = styled.View`
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 60px;
	border-width: 6px;
	border-color: ${({ theme }) => theme.color.white};
	padding: 14px;
	position: absolute;
	top: -50px;
`;

export const CloseIcon = styled(Icon).attrs(({ theme }) => ({
	iconName: 'close-outline',
	iconFamily: 'masterIcons',
	color: theme.color.callToAction,
	size: 25,
}))``;

export const SuccessIcon = styled(Icon).attrs(({ theme }) => ({
	iconName: 'checkmark-circle-outline',
	iconFamily: 'masterIcons',
	color: theme.color.white,
	size: 60,
}))``;
