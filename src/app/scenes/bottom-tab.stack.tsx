import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Icon } from '@atomic/atoms';
import { EventArg } from '@react-navigation/native';
import { Platform, View } from 'react-native';
import { DashboardStack } from './dashboard/dasboard.stack';
import { TransactionsStack } from './transactions/transactions.stack';

type BottomTabStackRoutes = {
	DashboardTab: {};
	TransactionTab: {};
	ExploreTab: {};
	RequestsTab: {};
	SettingsTab: {};
};

const BottomTab = createBottomTabNavigator<BottomTabStackRoutes>();

export const BottomTabStack = () => {
	const theme = useContext(ThemeContext);
	return (
		<BottomTab.Navigator
			initialRouteName="DashboardTab"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: `${theme.color.primary}`,
				tabBarInactiveTintColor: `${theme.color.gray}`,
				tabBarActiveBackgroundColor: `${theme.brand.yellow}`,
				tabBarItemStyle: {
					paddingTop: 10,
					paddingBottom: 20,
				},
				tabBarStyle: {
					height: 100,
					paddingBottom: Platform.OS === 'ios' ? 20 : 0,
				},
				tabBarLabelStyle: {
					fontFamily: `${theme.fontFamily.regular}`,
				},
			}}>
			<BottomTab.Screen
				name="DashboardTab"
				component={DashboardStack}
				options={{
					tabBarLabel: 'Inicio',
					tabBarIcon: ({ focused }) => (
						<View style={{}}>
							<Icon
								iconName={focused ? 'home-outline' : 'home-outline'}
								size={28}
								color={focused ? theme.color.primary : theme.color.gray}
							/>
						</View>
					),
				}}
			/>
			<BottomTab.Screen
				name="TransactionTab"
				component={TransactionsStack}
				options={{
					tabBarLabel: 'Transacciones',
					tabBarIcon: ({ focused }) => (
						<Icon
							iconName="credit-card-outline"
							size={28}
							color={focused ? theme.color.primary : theme.color.gray}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="ExploreTab"
				component={TransactionsStack}
				listeners={{
					tabPress: (e: EventArg<'tabPress', true, undefined>) =>
						e.preventDefault(),
				}}
				options={{
					tabBarLabel: 'Explorar',
					tabBarIcon: ({ focused }) => (
						<Icon
							iconName="grid-outline"
							size={28}
							color={focused ? theme.color.primary : theme.color.gray}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="RequestsTab"
				component={TransactionsStack}
				listeners={{
					tabPress: (e: EventArg<'tabPress', true, undefined>) =>
						e.preventDefault(),
				}}
				options={{
					tabBarLabel: 'Tramites\nTest',
					tabBarIcon: ({ focused }) => (
						<Icon
							iconName="shopping-cart-outline"
							size={28}
							color={focused ? theme.color.primary : theme.color.gray}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="SettingsTab"
				component={TransactionsStack}
				listeners={{
					tabPress: (e: EventArg<'tabPress', true, undefined>) =>
						e.preventDefault(),
				}}
				options={{
					tabBarLabel: 'Ajustes',
					tabBarIcon: ({ focused }) => (
						<Icon
							iconName="settings-2-outline"
							size={28}
							color={focused ? theme.color.primary : theme.color.gray}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};
