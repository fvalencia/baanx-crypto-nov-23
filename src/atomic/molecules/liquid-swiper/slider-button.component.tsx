import { Icon } from '@atomic/atoms';
import React from 'react';
import { Dimensions } from 'react-native';
import Animated, {
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import { Vector } from 'react-native-redash';

import { Side } from './wave.component';

const { width } = Dimensions.get('screen');
const RADIUS = 25;

interface ButtonProps {
	position: Vector<Animated.SharedValue<number>>;
	side: Side;
	activeSide: Animated.SharedValue<Side>;
}

const SlideButton = ({ position, side, activeSide }: ButtonProps) => {
	const isLeft = side === Side.LEFT;
	const style = useAnimatedStyle(() => ({
		position: 'absolute',
		left: isLeft ? position.x.value - RADIUS * 2 : width - position.x.value,
		top: position.y.value - RADIUS,
		borderRadius: RADIUS,
		width: RADIUS * 2,
		height: RADIUS * 2,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: withTiming(activeSide.value === Side.NONE ? 1 : 0),
	}));
	return (
		<Animated.View style={style}>
			<Icon
				iconFamily="feather"
				iconName={`chevron-${isLeft ? 'right' : 'left'}` as const}
				size={24}
				color="white"
			/>
		</Animated.View>
	);
};

export default SlideButton;
