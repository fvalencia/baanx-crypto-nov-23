import React from 'react';
import { View } from 'react-native';

import { Button } from '@atomic/atoms';
import notifee from '@notifee/react-native';

const DemoPushNotificationScreen = () => {
	notifee.onBackgroundEvent(async () => handlenLocalNotification());

	const handlenLocalNotification = () => {
		console.log('Local Notification!');
	};

	const triggerNotification = async () => {
		// Request permissions (required for iOS)
		await notifee.requestPermission();

		const channelId = await notifee.createChannel({
			id: 'default',
			name: 'Default Channel',
		});

		// Sometime later...
		await notifee.displayNotification({
			id: 'refer',
			title: 'Test!',
			body: 'Test body...',

			android: {
				channelId,
				lightUpScreen: true,
			},
		});
	};

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<Button
				title="Local Notification"
				onPress={triggerNotification}
				style={{ marginBottom: 10 }}
			/>
		</View>
	);
};

export default DemoPushNotificationScreen;
