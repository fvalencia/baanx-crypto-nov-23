import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, Fragment, useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';
import { ExampleEmptyRoutes } from './empty.stack';

type ScreenProps = NativeStackScreenProps<ExampleEmptyRoutes, 'ExampleEmpty'>;

const ExampleEmptyScreen: FC<ScreenProps> = ({ navigation }) => {
	const theme = useContext(ThemeContext);

	return (
		<Fragment>
			<StatusBar
				animated={true}
				translucent={true}
				showHideTransition="fade"
				barStyle={theme.statusBar.style}
				backgroundColor={theme.header.background}
			/>
		</Fragment>
	);
};

export default ExampleEmptyScreen;
