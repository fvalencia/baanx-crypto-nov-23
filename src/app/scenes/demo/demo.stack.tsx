import { HeaderBack } from '@atomic/atoms';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { generalScreenOptions } from '@app/Navigation';
import DemoDetailScreen from './demo-detail.screen';
import DemoHomeScreen from './demo.screen';

export type DemoStackRoutes = {
	DemoHome: undefined;
	DemoDetail: { componentDetail: string };
};

const DemoStackNav = createStackNavigator<DemoStackRoutes>();

export const DemoStack = () => {
	const theme = useContext(ThemeContext);

	return (
		<DemoStackNav.Navigator
			initialRouteName="DemoHome"
			screenOptions={{
				...generalScreenOptions,
				headerTitle: 'Demo',
				headerTintColor: theme.header.color,
				headerTitleStyle: {
					fontFamily: theme.fontFamily.regular,
				},
				headerStyle: {
					backgroundColor: theme.header.background,
				},
				headerBackImage: () => <HeaderBack tintColor={theme.header.color} />,
				headerBackTitleVisible: false,
			}}>
			<DemoStackNav.Screen
				name="DemoHome"
				options={{ headerTitle: 'Demo' }}
				component={DemoHomeScreen}
			/>
			<DemoStackNav.Screen
				name="DemoDetail"
				options={({ route }) => ({ headerTitle: route.params.componentDetail })}
				component={DemoDetailScreen}
			/>
		</DemoStackNav.Navigator>
	);
};
