import { DefaultTheme } from 'styled-components';
import { CommonTheme } from './common.theme';

export const DarkTheme: DefaultTheme = {
	...CommonTheme,
	form: {
		...CommonTheme.form,
		keyboardApperance: 'dark',
	},
};
