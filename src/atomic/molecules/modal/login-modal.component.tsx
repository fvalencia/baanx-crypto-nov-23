import React, { PropsWithChildren } from 'react';
import { Modal, Pressable } from 'react-native';

import { ImageFullSize } from '@atomic/atoms';
import useBiometrics from '@hooks/useBiometrics';
import {
	LoginModalContainerStyled,
	LoginModalContentStyled,
} from './modal.component.style';

type LoginModalProps = PropsWithChildren<{
	visible: boolean;
	handleModal: () => void;
}>;

export const LoginModal = ({
	visible,
	handleModal,
	children,
}: LoginModalProps) => {
	const { handleBiometrics } = useBiometrics();

	return (
		<Modal animationType="slide" transparent={true} visible={visible}>
			<LoginModalContainerStyled>
				<LoginModalContentStyled>
					<Pressable onPress={() => handleBiometrics(handleModal)}>
						{children ? (
							children
						) : (
							<ImageFullSize
								source={require('@assets/images/scenes/login/static_login.png')}
							/>
						)}
					</Pressable>
				</LoginModalContentStyled>
			</LoginModalContainerStyled>
		</Modal>
	);
};
