import React, { useState } from 'react';
import { View } from 'react-native';

import { Button } from '@atomic/atoms';
import { Camera } from '@atomic/molecules';

const DemoCameraScreen = () => {
	const [open, setOpen] = useState(false);

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<Button
				title="Open Camera"
				onPress={() => setOpen(true)}
				style={{ marginBottom: 10 }}
			/>
			<Camera
				isVisible={open}
				canSlideSide={true}
				position="back"
				onMediaCapturedSuccessfuly={() => setOpen(false)}
			/>
		</View>
	);
};

export default DemoCameraScreen;
