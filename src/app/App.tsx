import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { AppContextProvider } from '@app/core/context/app.context';
import { DarkTheme, LightTheme } from '@atomic/theme';
import { GlobalizeProvider, loadCldr } from 'react-native-globalize';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import Navigation from './Navigation';

loadCldr(require('react-native-globalize/locale-data/es'));

const App = () => {
	const colorScheme = useColorScheme();

	useEffect(() => {
		setTimeout(() => {
			LottieSplashScreen.hide();
		}, 3000);
	}, []);

	return (
		<AppContextProvider>
			<GlobalizeProvider locale="es" currency="COP">
				<ThemeProvider theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
					<Navigation />
				</ThemeProvider>
			</GlobalizeProvider>
		</AppContextProvider>
	);
};

export default App;
