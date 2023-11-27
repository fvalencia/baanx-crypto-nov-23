import { DefaultTheme } from 'styled-components';
import { CommonTheme } from './common.theme';

export const LightTheme: DefaultTheme = {
	...CommonTheme,
	form: {
		...CommonTheme.form,
		keyboardApperance: 'light',
	},
};
