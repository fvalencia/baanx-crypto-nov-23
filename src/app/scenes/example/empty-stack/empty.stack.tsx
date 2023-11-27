import { generalScreenOptions } from '@app/Navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

// screens
import ExampleEmptyScreen from './empty.screen';

export type ExampleEmptyRoutes = {
	ExampleEmpty: undefined;
};

const Stack = createNativeStackNavigator<ExampleEmptyRoutes>();

export const ExampleEmptyStackScreen = () => {
	const theme = useContext(ThemeContext);
	return (
		<Stack.Navigator
			initialRouteName="ExampleEmpty"
			screenOptions={{
				...generalScreenOptions,
				headerTitle: 'Empty Screen',
				headerTintColor: theme.header.color,
				headerTitleStyle: {
					fontFamily: theme.fontFamily.bold,
				},
				headerStyle: {
					backgroundColor: theme.header.background,
				},
			}}>
			<Stack.Screen
				name="ExampleEmpty"
				component={ExampleEmptyScreen}
				options={{
					headerTitle: 'Empty Screen',
				}}
			/>
		</Stack.Navigator>
	);
};
