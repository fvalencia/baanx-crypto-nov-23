import { Platform } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

enum BrandColors {
	Primary = '#2C2A29',
	Secondary = '#FFF',
}

enum SecondaryColors {
	Yellow = '#FDDA24',
	Green = '#00C389',
	Purple = '#9063CD',
	Orange = '#FF7F41',
	Pink = '#F5B6CD',
	Blue = '#59CBE8',
}

enum CommonColors {
	Black = 'black',
	White = 'white',
	GrayXLight = '#F4F4F4',
	GrayLight = '#D3D3D3',
	Gray = '#ABADAE',
	GrayDark = '#666666',
	GrayXDark = '#242424',
}

enum Accent {
	Caution = '#FFC81F',
	Links = '#27AAE1',
	Success = '#6DAB3C',
	Muted = '#86786F',
	Warning = '#E80D01',
}

const FontFamily = {
	Black: Platform.OS === 'ios' ? 'CIBFontNumerales-Color' : 'Roboto',
	Bold: Platform.OS === 'ios' ? 'CIBFontSans-Bold' : 'Roboto',
	Medium: Platform.OS === 'ios' ? 'SFPro-Regular' : 'Roboto',
	Regular: Platform.OS === 'ios' ? 'CIBFontSans-Regular' : 'Roboto',
	Light: Platform.OS === 'ios' ? 'CIBFontSans-Light' : 'Roboto',
	Thin: Platform.OS === 'ios' ? 'CIBFontSans-Thin' : 'Roboto',
};

enum FontSize {
	XXSmall = '16px',
	XSmall = '18px',
	Small = '22px',
	Medium = '26px',
	Large = '30px',
	XLarge = '32px',
	XXLarge = '36px',
	XXXLarge = '42px',
}

enum LineHeight {
	XXSmall = '20px',
	XSmall = '24px',
	Small = '28px',
	Medium = '32px',
	Large = '36px',
	XLarge = '40px',
	XXLarge = '50px',
}

enum Spacing {
	XXSmall = '2px',
	XSmall = '4px',
	Small = '8px',
	Medium = '16px',
	Large = '24px',
	XLarge = '32px',
}

enum IconSize {
	Small = 12,
	Medium = 16,
	Large = 20,
	XLarge = 24,
}

const Border = {
	Color: CommonColors.GrayDark,
	Width: '2px',
	Radius: '4px',
	RadiusLarge: '8px',
	RadiusXLarge: '30px',
};

export const CommonTheme: DefaultTheme = {
	color: {
		primary: BrandColors.Primary,
		secondary: BrandColors.Secondary,
		accessory: Accent.Links,
		neutral: CommonColors.Gray,
		callToAction: CommonColors.GrayXDark,
		alert: Accent.Warning,
		warning: Accent.Caution,
		success: Accent.Success,
		black: CommonColors.Black,
		white: CommonColors.White,
		grayXLight: CommonColors.GrayXLight,
		grayLight: CommonColors.GrayLight,
		gray: CommonColors.Gray,
		grayDark: CommonColors.GrayDark,
		grayXDark: CommonColors.GrayXDark,
	},
	brand: {
		yellow: SecondaryColors.Yellow,
		green: SecondaryColors.Green,
		purple: SecondaryColors.Purple,
		orange: SecondaryColors.Orange,
		pink: SecondaryColors.Pink,
		blue: SecondaryColors.Blue,
	},
	fontFamily: {
		black: FontFamily.Black,
		bold: FontFamily.Bold,
		medium: FontFamily.Medium,
		regular: FontFamily.Regular,
		light: FontFamily.Light,
		thin: FontFamily.Thin,
	},
	fontSize: {
		xxSmall: FontSize.XXSmall,
		xSmall: FontSize.XSmall,
		small: FontSize.Small,
		medium: FontSize.Medium,
		large: FontSize.Large,
		xLarge: FontSize.XLarge,
		xxLarge: FontSize.XXLarge,
		xxxLarge: FontSize.XXXLarge,
	},
	lineHeight: {
		xxSmall: LineHeight.XXSmall,
		xSmall: LineHeight.XSmall,
		small: LineHeight.Small,
		medium: LineHeight.Medium,
		large: LineHeight.Large,
		xLarge: LineHeight.XLarge,
		xxLarge: LineHeight.XXLarge,
	},
	spacing: {
		xxSmall: Spacing.XXSmall,
		xSmall: Spacing.XSmall,
		small: Spacing.Small,
		medium: Spacing.Medium,
		large: Spacing.Large,
		xLarge: Spacing.XLarge,
	},
	iconSize: {
		small: IconSize.Small,
		medium: IconSize.Medium,
		large: IconSize.Large,
		xLarge: IconSize.XLarge,
	},
	border: {
		color: Border.Color,
		width: Border.Width,
		radius: Border.Radius,
		radiusLarge: Border.RadiusLarge,
		radiusXLarge: Border.RadiusXLarge,
	},
	header: {
		background: BrandColors.Primary,
		color: CommonColors.White,
	},
	statusBar: {
		style: 'dark-content',
	},
	form: {
		keyboardApperance: 'default',
		placeholderTextColor: CommonColors.Gray,
	},
	animation: {
		scale: 1.0,
	},
};
