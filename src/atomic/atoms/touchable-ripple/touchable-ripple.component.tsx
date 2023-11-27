import * as React from 'react';
import {
	ColorValue,
	GestureResponderEvent,
	OpaqueColorValue,
	Platform,
	Pressable,
	PressableAndroidRippleConfig,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { getTouchableRippleColors } from './utils';

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;

type Props = React.ComponentProps<typeof Pressable> & {
	borderless?: boolean;
	background?: PressableAndroidRippleConfig;
	disabled?: boolean;
	onPress?: () => void | null;
	rippleColor?: ColorValue | OpaqueColorValue | string;
	underlayColor?: ColorValue | OpaqueColorValue | string;
	children: React.ReactElement;
	style?: StyleProp<ViewStyle>;
};

/**
 * TouchableRipple component
 *
 * @param {boolean} borderless - Whether to show ripple effect outside the view bounds
 * @param {PressableAndroidRippleConfig} background - Custom background for the ripple effect
 * @param {boolean} disabled - Whether the touchable is disabled
 * @param {() => void} onPress - Callback that is called when the user presses the touchable
 * @param {ColorValue | OpaqueColorValue | string} rippleColor - Custom color for the ripple effect
 * @param {ColorValue | OpaqueColorValue | string} underlayColor - Custom color for the underlay effect
 * @param {React.ReactElement} children - Content of the `TouchableRipple`.
 * @param {StyleProp<ViewStyle>} style - Style for the `TouchableRipple`.
 * @param {} rest - Other props for the `TouchableRipple`.
 *
 * @returns {React.ReactElement}
 *
 * @example
 * <TouchableRipple
 *   style={}
 *   onPress={() => {}}
 *   rippleColor="rgba(0, 0, 0, .32)">
 *   <View pointerEvents="none">
 *     <Body>Press anywhere</Body>
 *   </View>
 * </TouchableRipple>
 *
 * @see [TouchableRipple docs](https://labs.mastercard.com/gitlab8/LaunchPad/launchpad-react-native-template-v2/wikis/TouchableRipple)
 *
 */

export const TouchableRipple = ({
	style,
	background,
	borderless = false,
	disabled: disabledProp,
	rippleColor,
	underlayColor,
	children,
	...rest
}: Props) => {
	const theme = React.useContext(ThemeContext);
	const [showUnderlay, setShowUnderlay] = React.useState<boolean>(false);

	const disabled = disabledProp || !rest.onPress;
	const { calculatedRippleColor, calculatedUnderlayColor } =
		getTouchableRippleColors({
			theme,
			rippleColor,
			underlayColor,
		});

	// A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
	// https://github.com/facebook/react-native/issues/6480
	const useForeground =
		Platform.OS === 'android' &&
		Platform.Version >= ANDROID_VERSION_PIE &&
		borderless;

	const handlePressIn = (e: GestureResponderEvent) => {
		setShowUnderlay(true);
		rest.onPressIn?.(e);
	};

	const handlePressOut = (e: GestureResponderEvent) => {
		setShowUnderlay(false);
		rest.onPressOut?.(e);
	};

	if (TouchableRipple.supported) {
		return (
			<Pressable
				{...rest}
				disabled={disabled}
				style={[borderless && styles.overflowHidden, style]}
				android_ripple={
					background != null
						? background
						: {
								color: calculatedRippleColor,
								borderless,
								foreground: useForeground,
						  }
				}>
				{React.Children.only(children)}
			</Pressable>
		);
	}

	return (
		<Pressable
			{...rest}
			disabled={disabled}
			style={[
				borderless && styles.overflowHidden,
				showUnderlay && { backgroundColor: calculatedUnderlayColor },
				style,
			]}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}>
			{React.Children.only(children)}
		</Pressable>
	);
};

TouchableRipple.supported =
	Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;

const styles = StyleSheet.create({
	overflowHidden: {
		overflow: 'hidden',
	},
});
