import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { Label } from '@atomic/atoms';
import { DatePicker, Picker } from '@atomic/molecules';

const FormGroup = styled.View`
	margin-bottom: 24px;
`;

const DemoPickerScreen = () => {
	const [datePickerVisible, setDatePickerVisible] = useState(false);

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<FormGroup>
				<Label>Fecha de nacimiento</Label>
				<DatePicker
					mode="date"
					isVisible={datePickerVisible}
					onPress={() => setDatePickerVisible(true)}
					onCancel={() => setDatePickerVisible(false)}
				/>
			</FormGroup>
			<FormGroup>
				<Label>Estado</Label>
				<Picker
					listTitle="Estados"
					placeholder="Seleccione un Estado"
					data={[
						{
							id: '1',
							title: 'Test 1',
						},
						{
							id: '2',
							title: 'Test 2',
						},
						{
							id: '3',
							title: 'Test 3',
						},
					]}
					onSelectChange={() => {}}
				/>
			</FormGroup>
		</View>
	);
};

export default DemoPickerScreen;
