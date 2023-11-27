import React, { FC, useState } from 'react';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';

import {
	DefaultTextInputStyled,
	FillTextInputStyled,
	OutlineTextInputStyled,
} from './text-input.component.style';

export type CustomTextInputKind = 'default' | 'outline' | 'fill';
export interface CustomTextInputProps extends MaskedTextInputProps {
	kind: CustomTextInputKind;
}

/**
 * TextInput
 *
 * @param kind The alternative the be used. The avaloable option are 'default' | 'outline' | 'fill';
 * @returns styled TextInput component.
 */

export const TextInput: FC<CustomTextInputProps> = props => {
	const [isFocused, setIsFocused] = useState(false);
	const onFocusChange = () => setIsFocused(!isFocused);

	const textInputOption = {
		default: DefaultTextInputStyled,
		outline: OutlineTextInputStyled,
		fill: FillTextInputStyled,
	};

	const TextInputComponent = textInputOption[props.kind];

	return (
		<TextInputComponent
			{...props}
			as={props.mask || props.options ? MaskedTextInput : undefined}
			isFocused={isFocused}
			onFocus={onFocusChange}
			onBlur={onFocusChange}
		/>
	);
};
