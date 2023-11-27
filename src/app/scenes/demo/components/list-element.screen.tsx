import React from 'react';
import { View } from 'react-native';

import { Check, Switch } from '@atomic/atoms';
import { ListElement } from '@atomic/molecules';

const DemoListElementScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<ListElement
				title="Radio"
				subtitle="Subtitle 1"
				otherSubtitle="Subtitle 2"
				rightComponent={<Check color="secondary" kind="radio" />}
			/>
			<ListElement
				title="Checkbox"
				subtitle="Subtitle 1"
				rightComponent={<Check color="secondary" />}
			/>
			<ListElement
				title="Switch"
				subtitle="Subtitle 1"
				leftImage={require('../../../../assets/images/icons/example.png')}
				rightComponent={<Switch />}
			/>
		</View>
	);
};

export default DemoListElementScreen;
