import { Button, GradientButton } from '@atomic/atoms';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

// Adding custom styling to button container
export const CustomeStyledButton = styled(Button)`
	margin-bottom: 10px;
`;

const DemoButtonScreen = () => {
	const [processing, setProcessing] = useState(false);

	useEffect(() => {
		if (processing) {
			const timeout = setTimeout(() => setProcessing(false), 3000);
			return () => clearTimeout(timeout);
		}
	}, [processing, setProcessing]);

	return (
		<ScrollView>
			<View style={{ padding: 20 }}>
				<CustomeStyledButton title="Primary" onPress={() => {}} />
				<CustomeStyledButton
					title="Secondary"
					kind="secondary"
					onPress={() => {}}
				/>
				<CustomeStyledButton
					title="Tertiary"
					kind="tertiary"
					onPress={() => {}}
				/>
				<View style={{ flexDirection: 'row' }}>
					<Button
						title="Primary"
						onPress={() => {}}
						style={{ marginBottom: 10 }}
					/>
					<Button
						title="Secondary"
						kind="secondary"
						style={{ marginBottom: 10 }}
						onPress={() => {}}
					/>
				</View>
				<CustomeStyledButton
					title="Processing"
					onPress={() => setProcessing(true)}
					processing={processing}
					disabled={processing}
				/>
				<CustomeStyledButton title="Primary" onPress={() => {}} disabled />
				<CustomeStyledButton
					title="Secondary"
					kind="secondary"
					onPress={() => {}}
					disabled
				/>
				<View style={{ flexDirection: 'row' }}>
					<CustomeStyledButton
						title="Primary"
						onPress={() => {}}
						size="small"
					/>
					<CustomeStyledButton
						title="Primary"
						onPress={() => {}}
						size="small"
						disabled
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<CustomeStyledButton
						title="Secondary"
						kind="secondary"
						onPress={() => {}}
						size="small"
					/>
					<CustomeStyledButton
						title="Secondary"
						kind="secondary"
						onPress={() => {}}
						size="small"
						disabled
					/>
				</View>
				<CustomeStyledButton
					title="Tertiary"
					kind="tertiary"
					onPress={() => {}}
					size="small"
				/>
				<CustomeStyledButton
					title="Icon"
					icon="home-outline"
					onPress={() => {}}
				/>
				<CustomeStyledButton
					title="Icon"
					kind="secondary"
					icon="star-outline"
					onPress={() => {}}
				/>
				<CustomeStyledButton
					title="Icon"
					kind="tertiary"
					icon="bell-outline"
					onPress={() => {}}
				/>
				<GradientButton
					title="Button primary"
					kind="primary"
					onPress={() =>
						Alert.alert('Alert primary', 'Sample message from primary.')
					}
				/>
				<GradientButton
					title="Button outline"
					kind="outline"
					onPress={() =>
						Alert.alert('Alert outline', 'Sample message from outline.')
					}
				/>
			</View>
		</ScrollView>
	);
};

export default DemoButtonScreen;
