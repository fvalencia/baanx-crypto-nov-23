import * as React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { Icon } from '../icon/icon.component';

import { TouchableRipple } from '../touchable-ripple/touchable-ripple.component';
import { $RemoveChildren, getAndroidSelectionControlColor } from './utils';

export type Props = $RemoveChildren<typeof TouchableRipple> & {
	/**
	 * Status of checkbox.
	 */
	status: 'checked' | 'unchecked' | 'indeterminate';
	/**
	 * Whether checkbox is disabled.
	 */
	disabled?: boolean;
	/**
	 * Function to execute on press.
	 */
	onPress?: () => void;
	/**
	 * Custom color for unchecked checkbox.
	 */
	uncheckedColor?: string;
	/**
	 * Custom color for checkbox.
	 */
	color?: string;
};

// From https://material.io/design/motion/speed.html#duration
const ANIMATION_DURATION = 100;

export const CheckboxAndroid = ({
	status,
	disabled,
	onPress,
	...rest
}: Props) => {
	const theme = useContext(ThemeContext);
	const { current: scaleAnim } = useRef<Animated.Value>(new Animated.Value(1));
	const isFirstRendering = useRef<boolean>(true);

	const {
		animation: { scale },
	} = theme;

	useEffect(() => {
		// Do not run animation on very first rendering
		if (isFirstRendering.current) {
			isFirstRendering.current = false;
			return;
		}

		const checked = status === 'checked';

		Animated.sequence([
			Animated.timing(scaleAnim, {
				toValue: 0.85,
				duration: checked ? ANIMATION_DURATION * scale : 0,
				useNativeDriver: false,
			}),
			Animated.timing(scaleAnim, {
				toValue: 1,
				duration: checked
					? ANIMATION_DURATION * scale
					: ANIMATION_DURATION * scale * 1.75,
				useNativeDriver: false,
			}),
		]).start();
	}, [status, scaleAnim, scale]);

	const checked = status === 'checked';
	const indeterminate = status === 'indeterminate';

	const { rippleColor, selectionControlColor } =
		getAndroidSelectionControlColor({
			theme,
			disabled,
			checked,
			customColor: rest.color,
			customUncheckedColor: rest.uncheckedColor,
		});

	const borderWidth = scaleAnim.interpolate({
		inputRange: [0.8, 1],
		outputRange: [7, 0],
	});

	const icon = indeterminate
		? 'minus-box'
		: checked
		? 'checkbox-marked'
		: 'checkbox-blank-outline';

	return (
		<TouchableRipple
			{...rest}
			borderless
			rippleColor={rippleColor}
			onPress={onPress}
			disabled={disabled}
			accessibilityRole="checkbox"
			accessibilityState={{ disabled, checked }}
			accessibilityLiveRegion="polite"
			style={styles.container}>
			<Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
				<Icon
					iconFamily="materialCommunityIcons"
					iconName={icon}
					size={24}
					color={selectionControlColor}
				/>
				<View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
					<Animated.View
						style={[
							styles.fill,
							{ borderColor: selectionControlColor },
							{ borderWidth },
						]}
					/>
				</View>
			</Animated.View>
		</TouchableRipple>
	);
};

CheckboxAndroid.displayName = 'Checkbox.Android';

const styles = StyleSheet.create({
	container: {
		borderRadius: 18,
		width: 36,
		height: 36,
		padding: 6,
	},
	fillContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	fill: {
		height: 14,
		width: 14,
	},
});
