import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { Check } from '@atomic/atoms';

export const CustomField = styled.View`
	margin-bottom: 10px;
	flex-direction: row;
	align-items: center;
`;

export const CustomLabel = styled.Text`
	font-weight: bold;
	font-size: 16px;
	height: 22px;
`;

const DemoCheckScreen = () => {
	return (
		<View style={{ flex: 1, padding: 20 }}>
			<CustomField>
				<Check color="secondary" kind="radio" />
				<CustomLabel>Radio</CustomLabel>
			</CustomField>
			<CustomField>
				<Check color="secondary" />
				<CustomLabel>Checkbox</CustomLabel>
			</CustomField>
			<CustomField>
				<Check
					color="secondary"
					kind="custom"
					checkedIcon="checkmark-square-outline"
					uncheckedIcon="square-outline"
				/>
				<CustomLabel>Custom</CustomLabel>
			</CustomField>
		</View>
	);
};

export default DemoCheckScreen;
