import { Icon, IconFamily, IconName } from '@atomic/atoms';
import React, { FC } from 'react';
import {
	StyledTouchableOpacity,
	StyledView,
} from './header-right.component.style';

interface Option {
	iconFamily: IconFamily;
	iconName: IconName;
	callback: () => void;
}

export interface HeaderRightProps {
	options: Option[];
	color: string;
}

/**
 * HeaderRight component
 * @param {} passCode - A predefined passcode
 * @param {Array<Option>} options - A list of icon and callback
 * @param {string} color - The color of the icon
 * @returns {React.ReactElement}
 *
 * @example
 * <HeaderRight
 * 	options={[
 * 		{
 * 			iconFamily: 'masterIcons',
 * 			iconName: 'bell-outline',
 * 			callback: () => console.log('search'),
 * 		},
 * 		{
 * 			iconFamily: 'masterIcons',
 * 			iconName: 'settings-2-outline',
 * 			callback: () => console.log('bell'),
 * 		},
 * 	]}
 * 	color={colors.white}
 * />
 *
 * @see [HeaderRight docs](https://labs.mastercard.com/gitlab8/LaunchPad/launchpad-react-native-template-v2/wikis/header-right)
 */
export const HeaderRight: FC<HeaderRightProps> = ({ options, color }) => {
	return (
		<StyledView>
			{options.map((row, idx) => (
				<StyledTouchableOpacity
					key={`${row.iconName}-${idx}`}
					onPress={row.callback}>
					<Icon
						iconFamily={row.iconFamily}
						iconName={row.iconName}
						color={color}
						size={22}
					/>
				</StyledTouchableOpacity>
			))}
		</StyledView>
	);
};
