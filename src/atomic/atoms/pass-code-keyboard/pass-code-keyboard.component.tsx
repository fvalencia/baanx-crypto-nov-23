import { Icon } from '@atomic/atoms';
import React, { FC } from 'react';
import { View } from 'react-native';
import {
	PassCodeKeyboardActionItemStyle,
	PassCodeKeyboardContainerStyle,
	PassCodeKeyboardItemTextStyle,
	PassCodeSpaceKeyStyle,
} from './pass-code-keyboard.style';

type PassCodeProps = {
	onPress: (value: string | number) => void;
};

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'space', 0, 'delete'];

/**
 * PassCodeKeyboard Component
 *
 * @param onPress - Required, callback function when the button is pressed.
 *
 * @returns A styled PassCodeKeyboard Component.
 */
export const PassCodeKeyboard: FC<PassCodeProps> = ({ onPress }) => {
	return (
		<PassCodeKeyboardContainerStyle>
			{keys.map(key => {
				if (key === 'space') {
					return <PassCodeSpaceKeyStyle key="space" />;
				}
				return (
					<PassCodeKeyboardActionItemStyle
						onPress={() => onPress(key)}
						key={key}>
						<View>
							{key === 'delete' ? (
								<Icon
									iconFamily="materialCommunityIcons"
									iconName="backspace-outline"
									size={32}
									color="rgba(0,0,0,0.3)"
								/>
							) : (
								<PassCodeKeyboardItemTextStyle>
									{key}
								</PassCodeKeyboardItemTextStyle>
							)}
						</View>
					</PassCodeKeyboardActionItemStyle>
				);
			})}
		</PassCodeKeyboardContainerStyle>
	);
};
