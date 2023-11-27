import color from 'color';
import { ColorValue, OpaqueColorValue } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

const getUnderlayColor = ({
	calculatedRippleColor,
	underlayColor,
}: {
	calculatedRippleColor: ColorValue | OpaqueColorValue | string;
	underlayColor?: ColorValue | OpaqueColorValue | string;
}) => {
	if (underlayColor != null) {
		return underlayColor;
	}

	return color(calculatedRippleColor).fade(0.5).rgb().string();
};

const getRippleColor = ({
	theme,
	rippleColor,
}: {
	theme: DefaultTheme;
	rippleColor?: ColorValue | OpaqueColorValue | string;
}) => {
	if (rippleColor) {
		return rippleColor;
	}

	return color(theme.color.black).alpha(0.2).rgb().string();
};

export const getTouchableRippleColors = ({
	theme,
	rippleColor,
	underlayColor,
}: {
	theme: DefaultTheme;
	rippleColor?: ColorValue | OpaqueColorValue | string;
	underlayColor?: ColorValue | OpaqueColorValue | string;
}) => {
	const calculatedRippleColor = getRippleColor({ theme, rippleColor });
	return {
		calculatedRippleColor,
		calculatedUnderlayColor: getUnderlayColor({
			calculatedRippleColor,
			underlayColor,
		}),
	};
};
