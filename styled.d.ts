import { ColorValue } from 'react-native';

type StatusBarStyle = 'default' | 'light-content' | 'dark-content';
type KeyboardApperanceStyle = 'default' | 'light' | 'dark';
type PlaceholderTextColor = ColorValue | undefined;

declare module 'styled-components/native' {
	export interface DefaultTheme {
		color: {
			primary: string;
			secondary: string;
			accessory: string;
			neutral: string;
			callToAction: string;
			alert: string;
			warning: string;
			success: string;
			black: string;
			white: string;
			grayXLight: string;
			grayLight: string;
			gray: string;
			grayDark: string;
			grayXDark: string;
		};
		brand: {
			yellow: string;
			green: string;
			purple: string;
			orange: string;
			pink: string;
			blue: string;
		};
		fontFamily: {
			black: string;
			bold: string;
			medium: string;
			regular: string;
			light: string;
			thin: string;
		};
		fontSize: {
			xxSmall: string;
			xSmall: string;
			small: string;
			medium: string;
			large: string;
			xLarge: string;
			xxLarge: string;
			xxxLarge: string;
		};
		lineHeight: {
			xxSmall: string;
			xSmall: string;
			small: string;
			medium: string;
			large: string;
			xLarge: string;
			xxLarge: string;
		};
		spacing: {
			xxSmall: string;
			xSmall: string;
			small: string;
			medium: string;
			large: string;
			xLarge: string;
		};
		iconSize: {
			small: number;
			medium: number;
			large: number;
			xLarge: number;
		};
		border: {
			color: string;
			width: string;
			radius: string;
			radiusLarge: string;
			radiusXLarge: string;
		};
		header: {
			background: string;
			color: string;
		};
		statusBar: {
			style: StatusBarStyle;
		};
		form: {
			keyboardApperance: KeyboardApperanceStyle;
			placeholderTextColor: PlaceholderTextColor;
		};
		animation: {
			scale: number;
		};
	}
}
