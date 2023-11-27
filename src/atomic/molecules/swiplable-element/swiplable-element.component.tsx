import { SwipeableApple, SwipeableGmail } from '@atomic/atoms';
import React, { FC, ReactElement } from 'react';
import { Platform } from 'react-native';

export type DataRow = {
	from: string;
	when: string;
	message: string;
};

type SwipeableRowProps = {
	children: ReactElement;
	onSwipeableLeftPress?: () => void;
	onSwipeableRightPress?: () => void;
};

/**
 * Swipable element component
 *
 * @param {ReactElement} children - The content of the swipable element
 * @param {() => void} onSwipeableLeftPress - on swipe left callback
 * @param {() => void} onSwipeableRightPress - on swipe right callback
 *
 * @returns {React.ReactElement} Swipable element component
 *
 * @example
 * <Swipeable
 * 	onSwipeableLeftPress={() => Alert.alert('Do something')}
 * 	onSwipeableRightPress={() => Alert.alert('Do something')}
 * >
 * 	<ListElement
 * 		title="Checkbox"
 * 		subtitle="Subtitle 1"
 * 		rightComponent={<Check color="secondary" />}
 * 	/>
 * </Swipeable>
 *
 * @see [Swipeable docs](https://labs.mastercard.com/gitlab8/LaunchPad/launchpad-react-native-template-v2/wikis/swipeable)
 *
 */
export const Swipeable: FC<SwipeableRowProps> = ({
	children,
	onSwipeableLeftPress,
	onSwipeableRightPress,
}) => {
	if (Platform.OS === 'ios') {
		return (
			<SwipeableApple
				onSwipeableLeftPress={onSwipeableLeftPress}
				onSwipeableRightPress={onSwipeableRightPress}>
				{children}
			</SwipeableApple>
		);
	} else {
		return (
			<SwipeableGmail
				onSwipeableLeftPress={onSwipeableLeftPress}
				onSwipeableRightPress={onSwipeableRightPress}>
				{children}
			</SwipeableGmail>
		);
	}
};
