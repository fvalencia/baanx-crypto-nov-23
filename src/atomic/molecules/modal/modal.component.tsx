import React, { FC } from 'react';
import ExModal from 'react-native-modal';

import {
	ContentText,
	IconWrapper,
	NotificationModal,
	SlideModal,
	StyledModalWrapper,
	SuccessIcon,
	TitleText,
} from './modal.component.style';

export type Kind = 'notification' | 'slide';
export interface ModalProps {
	open: boolean;
	onPress: () => void;
	title: string;
	content?: string;
	children?: React.ReactNode;
	kind?: Kind;
	hideSuccessIcon?: boolean;
	customImage?: JSX.Element;
}

/**
 * Modal Component
 *
 * @param open - A boolean value that opens and closes the modal.
 * @param onPress - A callback triggered when clicking the X or the backdrop of the modal.
 * @param title - A valid title to be display in the center of the modal.
 * @param content - A valid content to be displayed underneeth the title element.
 * @param children - A valid React Node element to be displayed underneeth the content.
 * @param kind - A valid kind either notification or slide.
 *
 * @returns Styled Modal
 */
export const Modal: FC<ModalProps> = ({
	open,
	onPress,
	title,
	content,
	children,
	kind = 'notification',
	hideSuccessIcon,
	customImage,
}) => {
	const ModalComponent =
		kind === 'notification' ? NotificationModal : SlideModal;

	return (
		<ExModal
			isVisible={open}
			style={{ margin: 0 }}
			animationIn={'slideInUp'}
			animationOut={'slideOutDown'}
			backdropTransitionOutTiming={0}
			propagateSwipe={true}
			onSwipeComplete={onPress}
			swipeDirection={
				kind === 'notification' ? ['up', 'down', 'left', 'right'] : ['down']
			}>
			<StyledModalWrapper>
				<ModalComponent hideSuccessIcon={hideSuccessIcon}>
					{kind === 'notification' && !hideSuccessIcon ? (
						<IconWrapper>
							<SuccessIcon />
						</IconWrapper>
					) : null}
					{customImage}
					<TitleText>{title}</TitleText>
					{content && <ContentText>{content}</ContentText>}
					{children}
				</ModalComponent>
			</StyledModalWrapper>
		</ExModal>
	);
};
