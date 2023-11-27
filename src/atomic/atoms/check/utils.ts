import color from 'color';
import { DefaultTheme } from 'styled-components/native';

const getAndroidCheckedColor = ({
	theme,
	customColor,
}: {
	theme: DefaultTheme;
	customColor?: string;
}) => {
	if (customColor) {
		return customColor;
	}

	return theme.color.primary;
};

const getAndroidUncheckedColor = ({
	theme,
	customUncheckedColor,
}: {
	theme: DefaultTheme;
	customUncheckedColor?: string;
}) => {
	if (customUncheckedColor) {
		return customUncheckedColor;
	}

	return color(theme.color.grayDark).alpha(0.54).rgb().string();
};

const getAndroidRippleColor = ({
	theme,
	checkedColor,
	disabled,
}: {
	theme: DefaultTheme;
	checkedColor: string;
	disabled?: boolean;
}) => {
	if (disabled) {
		return color(theme.color.grayDark).alpha(0.16).rgb().string();
	}

	return color(checkedColor).fade(0.32).rgb().string();
};

const getAndroidControlColor = ({
	theme,
	checked,
	disabled,
	checkedColor,
	uncheckedColor,
}: {
	theme: DefaultTheme;
	checked: boolean;
	checkedColor: string;
	uncheckedColor: string;
	disabled?: boolean;
}) => {
	if (disabled) {
		return theme.color.white;
	}

	if (checked) {
		return checkedColor;
	}
	return uncheckedColor;
};

export const getAndroidSelectionControlColor = ({
	theme,
	disabled,
	checked,
	customColor,
	customUncheckedColor,
}: {
	theme: DefaultTheme;
	checked: boolean;
	disabled?: boolean;
	customColor?: string;
	customUncheckedColor?: string;
}) => {
	const checkedColor = getAndroidCheckedColor({ theme, customColor });
	const uncheckedColor = getAndroidUncheckedColor({
		theme,
		customUncheckedColor,
	});
	return {
		rippleColor: getAndroidRippleColor({ theme, checkedColor, disabled }),
		selectionControlColor: getAndroidControlColor({
			theme,
			disabled,
			checked,
			checkedColor,
			uncheckedColor,
		}),
	};
};

const getIOSCheckedColor = ({
	theme,
	disabled,
	customColor,
}: {
	theme: DefaultTheme;
	customColor?: string;
	disabled?: boolean;
}) => {
	if (disabled) {
		return theme.color.white;
	}

	if (customColor) {
		return customColor;
	}

	return theme.color.primary;
};

const getIOSRippleColor = ({
	theme,
	checkedColor,
	disabled,
}: {
	theme: DefaultTheme;
	checkedColor: string;
	disabled?: boolean;
}) => {
	if (disabled) {
		return color(theme.color.white).alpha(0.16).rgb().string();
	}
	return color(checkedColor).fade(0.32).rgb().string();
};

export const getSelectionControlIOSColor = ({
	theme,
	disabled,
	customColor,
}: {
	theme: DefaultTheme;
	disabled?: boolean;
	customColor?: string;
}) => {
	const checkedColor = getIOSCheckedColor({ theme, disabled, customColor });
	return {
		checkedColor,
		rippleColor: getIOSRippleColor({
			theme,
			checkedColor,
			disabled,
		}),
	};
};

export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<
	React.ComponentPropsWithoutRef<T>,
	'children'
>;
