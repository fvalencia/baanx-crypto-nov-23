import React, { FC, useContext, useState } from 'react';
import { Switch as ExSwitch, SwitchProps } from 'react-native';
import { ThemeContext } from 'styled-components/native';

/**
 * Switch Component
 * this is a wrapper to add theme colors to the default react-native component.
 *
 * @param props inherited from SwitchProps
 *
 * @returns Styled Switch Component
 */
export const Switch: FC<SwitchProps> = props => {
	const theme = useContext<ThemeContext>(ThemeContext);
	const [selected, setSelected] = useState(false);

	return (
		<ExSwitch
			value={selected}
			onChange={() => setSelected(!selected)}
			trackColor={{ false: theme.color.grayLight, true: theme.color.secondary }}
			ios_backgroundColor={theme.color.grayLight}
			{...props}
		/>
	);
};
