import { Icon } from '@atomic/atoms';
import React, { FC, ReactElement, useRef } from 'react';
import {
	Animated,
	I18nManager,
	Pressable,
	StyleSheet,
	View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

type SwipeableGmailProps = {
	onSwipeableLeftPress?: () => void;
	onSwipeableRightPress?: () => void;
	children: ReactElement;
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const SwipeableGmail: FC<SwipeableGmailProps> = ({
	children,
	onSwipeableLeftPress,
	onSwipeableRightPress,
}) => {
	const swipeableRef = useRef<any>(null);

	const renderLeftActions = (
		_progress: Animated.AnimatedInterpolation<number>,
		dragX: Animated.AnimatedInterpolation<number>,
	) => {
		const scale = dragX.interpolate({
			inputRange: [0, 80],
			outputRange: [0, 1],
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
				<AnimatedView style={[styles.actionIcon, { transform: [{ scale }] }]}>
					<Icon
						iconFamily="materialCommunityIcons"
						iconName="email-mark-as-unread"
						color="white"
						size={26}
					/>
				</AnimatedView>
			</Pressable>
		);
	};

	const renderRightActions = (
		_progress: Animated.AnimatedInterpolation<number>,
		dragX: Animated.AnimatedInterpolation<number>,
	) => {
		const scale = dragX.interpolate({
			inputRange: [-80, 0],
			outputRange: [1, 0],
			extrapolate: 'clamp',
		});

		return (
			<Pressable
				style={styles.rightAction}
				onPress={() => {
					close();
					if (onSwipeableRightPress !== undefined) {
						onSwipeableRightPress();
					}
				}}>
				<AnimatedView style={[styles.actionIcon, { transform: [{ scale }] }]}>
					<Icon
						iconFamily="materialCommunityIcons"
						iconName="trash-can-outline"
						color="white"
						size={26}
					/>
				</AnimatedView>
			</Pressable>
		);
	};

	const close = () => {
		swipeableRef.current.close();
	};

	return (
		<Swipeable
			ref={swipeableRef}
			friction={2}
			leftThreshold={80}
			enableTrackpadTwoFingerGesture
			rightThreshold={40}
			renderLeftActions={renderLeftActions}
			renderRightActions={renderRightActions}>
			{children}
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	leftAction: {
		flex: 1,
		backgroundColor: '#388e3c',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
	},
	actionIcon: {
		width: 30,
		height: 30,
		marginHorizontal: 10,
		backgroundColor: 'transparent',
	},
	rightAction: {
		alignItems: 'center',
		flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
		backgroundColor: '#dd2c00',
		flex: 1,
		justifyContent: 'flex-end',
	},
});
