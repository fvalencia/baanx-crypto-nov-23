import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { FormGroup, Label, TextInput } from '@atomic/atoms';
export const ContainerStyled = styled.View`
	display: flex;
	align-items: flex-start;
	padding-top: ${({ theme }) => theme.spacing.medium};
	padding-left: ${({ theme }) => theme.spacing.medium};
	padding-right: ${({ theme }) => theme.spacing.medium};
`;

const DemoFormScreen = ({}) => {
	const [form, setForm] = React.useState({
		name: '',
		email: '',
		hourlyRate: '',
		birthDay: '',
	});

	const handleForm = (key: string, value: string) => {
		setForm(currentForm => ({
			...currentForm,
			[key]: value,
		}));
	};

	return (
		<ScrollView>
			<ContainerStyled>
				<FormGroup>
					<Label>Full name</Label>
					<TextInput
						kind="default"
						placeholder="Ex.: Martin Fitzgerald Lawrence"
						onChangeText={value => handleForm('name', value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Email</Label>
					<TextInput
						kind="default"
						placeholder="fitzgerald@lawrence.com"
						onChangeText={value => handleForm('email', value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Hourly Rate</Label>
					<TextInput
						kind="outline"
						type="currency"
						options={{
							prefix: '$',
							decimalSeparator: '.',
							groupSeparator: ',',
							precision: 2,
						}}
						onChangeText={value => handleForm('hourlyRate', value)}
						keyboardType="numeric"
					/>
				</FormGroup>
				<FormGroup>
					<Label>Birth</Label>
					<TextInput
						kind="fill"
						mask="99/99/9999"
						placeholder="MM/DD/YYYY"
						onChangeText={value => handleForm('birthDay', value)}
						keyboardType="numeric"
					/>
				</FormGroup>
			</ContainerStyled>
		</ScrollView>
	);
};

export default DemoFormScreen;
