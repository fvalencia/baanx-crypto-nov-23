import React, { FC, useContext } from 'react';
import { Platform } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { Icon } from '../icon/icon.component';
import { StyledView } from './header-back.component.style';

export interface HeaderBackProps {
	tintColor?: string;
}

export const HeaderBack: FC<HeaderBackProps> = ({ tintColor = 'white' }) => {
	const theme = useContext(ThemeContext);

	return (
		<StyledView>
			<Icon
				iconFamily="masterIcons"
				iconName={
					Platform.OS === 'ios' ? 'arrow-ios-back-fill' : 'arrow-back-fill'
				}
				size={theme.iconSize.xLarge}
				color={tintColor}
			/>
		</StyledView>
	);
};
