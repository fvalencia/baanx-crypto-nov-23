import Modal from 'react-native-modal';
import styled from 'styled-components/native';

export const ModalStyled = styled(Modal as any)`
	margin: 0;
`;

export const PickerPressableStyled = styled.Pressable`
	width: 100%;
	height: 44px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.spacing.small};
	padding-left: 5px;
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme }) => theme.color.gray};
`;

export const PickerTitleStyled = styled.Text<{ placeholder?: boolean }>`
	font-family: ${({ theme }) => theme.fontFamily.regular};
	font-size: 18px;
	color: ${({ theme, placeholder }) =>
		placeholder ? theme.color.gray : theme.color.primary};
`;

export const ListContainerStyled = styled.View`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`;

export const ListContentStyled = styled.View`
	width: 100%;
	height: 400px;
	background-color: ${({ theme }) => theme.color.white};
`;

export const ListItemContainerStyled = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-top: ${({ theme }) => theme.spacing.medium};
	padding-right: ${({ theme }) => theme.spacing.large};
	padding-bottom: ${({ theme }) => theme.spacing.medium};
	padding-left: ${({ theme }) => theme.spacing.large};
	border-bottom-width: ${({ theme }) => theme.border.width};
	border-bottom-color: ${({ theme }) => theme.color.grayLight};
`;

export const ListItemTitleStyled = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.bold};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
	color: ${({ theme }) => theme.color.grayDark};
`;

export const ItemContainerPressableStyled = styled.Pressable`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.color.white};
	padding-top: ${({ theme }) => theme.spacing.small};
	padding-right: ${({ theme }) => theme.spacing.large};
	padding-bottom: ${({ theme }) => theme.spacing.small};
	padding-left: ${({ theme }) => theme.spacing.large};
	border-bottom-width: ${({ theme }) => theme.border.width};
	border-bottom-color: ${({ theme }) => theme.color.grayLight};
`;

export const ItemDescriptionStyled = styled.Text`
	font-family: ${({ theme }) => theme.fontFamily.regular};
	font-size: ${({ theme }) => theme.fontSize.xSmall};
	color: ${({ theme }) => theme.color.grayDark};
`;
