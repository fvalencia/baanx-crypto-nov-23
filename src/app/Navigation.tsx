import React from 'react';

import {
	NavigationContainer,
	DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from 'styled-components/native';

import { AwarenessStack } from '@scenes/awareness/awareness.stack';
import { DashboardStack } from '@scenes/dashboard/dasboard.stack';
import { DemoStack } from '@scenes/demo/demo.stack';
import { TransactionsStack } from '@scenes/transactions/transactions.stack';
import { BottomTabStack } from './scenes/bottom-tab.stack';
import { RescueStack } from './scenes/rescue/rescue.stack';
import { TransferStack } from './scenes/transfer/transfer.stack';

export type RootRoutes = {
	Empty: undefined;
	Demo: undefined;
	DashboardStack: undefined;
	TransactionsStack: undefined;
	AwarenessStack: undefined;
	Transfer: undefined;
	BottomTab: undefined;
	Rescue: undefined;
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
				initialRouteName="AwarenessStack"
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
				<Stack.Screen
					name="Transfer"
					component={TransferStack}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="DashboardStack"
					component={DashboardStack}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="TransactionsStack"
					component={TransactionsStack}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="AwarenessStack"
					component={AwarenessStack}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Rescue"
					component={RescueStack}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
