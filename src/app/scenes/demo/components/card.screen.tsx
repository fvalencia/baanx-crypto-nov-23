import { CardWide, CardWideProps } from '@atomic/molecules';
import React, { useState } from 'react';
import { View } from 'react-native';

const DemoCardScreen = () => {
	const [data, setData] = useState<CardWideProps>({
		key: 'card-1',
		title: 'Starbucks',
		description: 'Latte Macchiato',
		price: '$1.800',
		image: require('../../../../assets/images/components/card/moment.jpg'),
		hasIcon: true,
		tag: {
			title: '20%',
			iconFamily: 'masterIcons',
			iconName: 'flag-outline',
		},
	});

	return (
		<View>
			<CardWide {...data} />
		</View>
	);
};

export default DemoCardScreen;
