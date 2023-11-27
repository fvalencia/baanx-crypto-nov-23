import React from 'react';

import {
	NavigationContainer,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from 'styled-components/native';

import { DemoStack } from '@scenes/demo/demo.stack';
import { BottomTabStack } from './scenes/bottom-tab.stack';

export type RootRoutes = {
	Empty: undefined;
	Demo: undefined;
	BottomTab: undefined;
};

export const generalScreenOptions = {
	headerTitleAllowFontScaling: true,
	headerBackAllowFontScaling: true,
	headerShadowVisible: false,
};

const Stack = createNativeStackNavigator<RootRoutes>();

const Navigation = () => {
	const theme = React.useContext(ThemeContext);
	const NavigationTheme = {
		...NavigationDefaultTheme,
		colors: {
			...NavigationDefaultTheme.colors,
			background: theme.color.grayXLight,
		},
	};

	return (
		<NavigationContainer theme={NavigationTheme}>
			<Stack.Navigator
				initialRouteName="Demo"
				screenOptions={() => ({
					...generalScreenOptions,
					headerTitle: 'Mastercard',
					headerTintColor: theme.header.color,
					headerTitleStyle: {
						fontFamily: theme.fontFamily.regular,
					},
					headerStyle: {
						backgroundColor: theme.header.background,
					},
				})}>
				<Stack.Screen
					name="Demo"
					component={DemoStack}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="BottomTab"
					component={BottomTabStack}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
