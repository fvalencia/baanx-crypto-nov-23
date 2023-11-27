import React, { useState } from 'react';
import { View } from 'react-native';

import { Slider } from '@atomic/molecules';

const DemoSliderScreen = () => {
	const [value, setValue] = useState(500);
	return (
		<View style={{ flex: 1, padding: 20 }}>
			<Slider
				min={0}
				max={1000}
				step={10}
				value={value}
				onValueChange={v => setValue(v)}
			/>
		</View>
	);
};

export default DemoSliderScreen;
