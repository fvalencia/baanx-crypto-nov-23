import React, { FC, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Icon } from '../icon/icon.component';
import { StyledTouchableOpacity } from './check.component.style';

type CheckKind = 'checkbox' | 'radio' | 'custom';

export type CheckProps = {
	kind?: CheckKind;
	color?: string;
	checkedIcon?: string;
	uncheckedIcon?: string;
	initialValue?: boolean;
	value?: boolean;
	controlled?: boolean;
};

/**
 * Check Component
 *
 * @param kind A valid string value for the check kind.
 * @param color A valid string color from the pre defined list.
 * @param checkedIcon A valid string icon name from the mastersIcon library.
 * @param uncheckedIcon A valid string icon name from the mastersIcon library.
 * @param initialValue A boolean value as initial value for the component.
 *
 * @returns Styled Check Component
 */
export const Check: FC<CheckProps> = ({
	kind = 'checkbox',
	color = '#00C389',
	checkedIcon = '',
	uncheckedIcon = '',
	initialValue = false,
	value,
	controlled,
}) => {
	const [selected, setSelected] = useState(initialValue);
	const theme = useContext(ThemeContext);
	const handleStateChange = () => setSelected(!selected);
	const internalValue = controlled ? value : selected;

	return (
		<StyledTouchableOpacity onPress={handleStateChange}>
			<Icon
				iconName={
					kind === 'checkbox'
						? internalValue
							? 'checkmark-square-2-fill'
							: 'square-fill'
						: kind === 'radio'
						? internalValue
							? 'radio-button-on-fill'
							: 'radio-button-off-fill'
						: internalValue
						? checkedIcon
						: uncheckedIcon
				}
				color={
					kind === 'radio'
						? !internalValue
							? theme.color.grayLight
							: theme.brand.green
						: color
				}
				size={theme.iconSize.xLarge}
			/>
		</StyledTouchableOpacity>
	);
};
