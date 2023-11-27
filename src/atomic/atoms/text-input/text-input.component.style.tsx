import styled from 'styled-components/native';
import { CustomTextInputProps } from './text-input.component';

type CustomTextInputStyledProp = {
	isFocused?: boolean;
};

export const BaseTextInputStyled = styled.TextInput.attrs(({ theme }) => ({
	keyboardAppearance: theme.form.keyboardApperance,
	placeholderTextColor: theme.form.placeholderTextColor,
}))<Partial<CustomTextInputProps & CustomTextInputStyledProp>>`
	width: 100%;
	height: 40px;
	font-family: ${({ theme }) => theme.fontFamily.regular};
	color: ${({ theme }) => theme.color.primary};
	padding: ${({ theme }) => theme.spacing.small};
	font-size: 18px;
`;

export const DefaultTextInputStyled = styled(BaseTextInputStyled)`
	padding: ${({ theme }) => theme.spacing.small} 0;
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme, isFocused }) =>
		isFocused ? theme.color.primary : theme.color.gray};
`;

export const OutlineTextInputStyled = styled(BaseTextInputStyled)`
	border-width: ${({ theme }) => theme.border.width};
	border-radius: ${({ theme }) => theme.border.radius};
	border-color: ${({ theme, isFocused }) =>
		isFocused ? theme.color.primary : theme.color.gray};
`;

export const FillTextInputStyled = styled(BaseTextInputStyled)`
	background-color: ${({ theme }) => theme.color.grayLight};
	border-radius: ${({ theme }) => theme.border.radius};
`;
