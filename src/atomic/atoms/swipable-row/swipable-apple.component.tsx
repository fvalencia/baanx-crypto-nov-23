import React, { FC, ReactElement, useRef } from 'react';
import {
	Animated,
	I18nManager,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

type SwipeableAppleProps = {
	onSwipeableLeftPress?: () => void;
	onSwipeableRightPress?: () => void;
	children: ReactElement;
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const SwipeableApple: FC<SwipeableAppleProps> = ({
	children,
	onSwipeableLeftPress,
	onSwipeableRightPress,
}) => {
	const swipeableRef = useRef<any>(null);

	const close = () => {
		swipeableRef.current.close();
	};

	const renderLeftActions = (
		_progress: Animated.AnimatedInterpolation<number>,
		dragX: Animated.AnimatedInterpolation<number>,
	) => {
		const translateX = dragX.interpolate({
			inputRange: [0, 50, 100, 101],
			outputRange: [-20, 0, 0, 1],
			extrapolate: 'clamp',
		});

		return (
			<Pressable
				style={styles.leftAction}
				onPress={() => {
					close();
					if (onSwipeableLeftPress !== undefined) {
						onSwipeableLeftPress();
					}
				}}>
				<AnimatedView style={styles.leftAction}>
					<Animated.Text
						style={[
							styles.actionText,
							{
								transform: [{ translateX }],
							},
						]}>
						Archive
					</Animated.Text>
				</AnimatedView>
			</Pressable>
		);
	};

	const renderRightAction = (
		text: string,
		color: string,
		x: number,
		progress: Animated.AnimatedInterpolation<number>,
	) => {
		const translateX = progress.interpolate({
			inputRange: [0, 1],
			outputRange: [x, 0],
		});
		const pressHandler = () => {
			close();
			if (onSwipeableRightPress !== undefined) {
				onSwipeableRightPress();
			}
		};

		return (
			<Animated.View style={{ flex: 1, transform: [{ translateX }] }}>
				<Pressable
					style={[styles.rightAction, { backgroundColor: color }]}
					onPress={pressHandler}>
					<Text style={styles.actionText}>{text}</Text>
				</Pressable>
			</Animated.View>
		);
	};

	const renderRightActions = (
		progress: Animated.AnimatedInterpolation<number>,
		_dragX: Animated.AnimatedInterpolation<number>,
	) => {
		return (
			<View
				style={{
					width: 128,
					flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
				}}>
				{renderRightAction('Delete', '#dd2c00', 128, progress)}
			</View>
		);
	};

	return (
		<Swipeable
			ref={swipeableRef}
			friction={2}
			enableTrackpadTwoFingerGesture
			leftThreshold={30}
			rightThreshold={40}
			renderLeftActions={
				onSwipeableLeftPress !== undefined ? renderLeftActions : undefined
			}
			renderRightActions={
				onSwipeableRightPress !== undefined ? renderRightActions : undefined
			}>
			{children}
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	leftAction: {
		flex: 1,
		backgroundColor: '#497AFC',
		justifyContent: 'center',
	},
	actionText: {
		color: 'white',
		fontSize: 16,
		backgroundColor: 'transparent',
		padding: 10,
	},
	rightAction: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
});
