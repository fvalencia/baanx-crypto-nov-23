import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { Button } from '@atomic/atoms';
import { Alert, Modal } from '@atomic/molecules';

// Adding custom styling to button container
export const CustomeStyledButton = styled(Button)`
	margin-bottom: 10px;
`;

const DemoModalScreen = () => {
	const [notificationModal, setNotificationModal] = useState(false);
	const [slideModal, setSlideModal] = useState(false);
	const [customModal, setCustomModal] = useState(false);
	const [openAlert, setOpenAlert] = useState(false);
	const [processing, setProcessing] = useState(false);

	const handleAlertTimeout = () => {
		setOpenAlert(false);
		setProcessing(false);
	};

	const handleProcessing = () => {
		setProcessing(true);
		setTimeout(() => {
			setOpenAlert(true);
		}, 3000);
	};

	return (
		<View style={{ flex: 1, padding: 20 }}>
			<CustomeStyledButton
				title="Notification Modal"
				onPress={() => setNotificationModal(true)}
			/>
			<Modal
				open={notificationModal}
				onPress={() => setNotificationModal(false)}
				title="Notification"
				content="content goes here">
				<View
					style={{
						width: '100%',
					}}>
					<Button
						title="Primary"
						kind="primary"
						onPress={() => setNotificationModal(false)}
						style={{ marginBottom: 10 }}
					/>
				</View>
			</Modal>
			<CustomeStyledButton
				title="Slide Modal"
				kind="secondary"
				onPress={() => setSlideModal(true)}
			/>
			<Modal
				open={slideModal}
				onPress={() => setSlideModal(false)}
				title="Slide Modal"
				kind="slide">
				<View
					style={{
						width: '100%',
					}}>
					<Button
						title="Primary"
						kind="primary"
						onPress={() => setSlideModal(false)}
						style={{ marginBottom: 10 }}
					/>
				</View>
			</Modal>
			<CustomeStyledButton
				title="Lottie Success"
				onPress={handleProcessing}
				processing={processing}
				disabled={processing}
			/>
			<Alert
				open={openAlert}
				message="Success Message"
				onAnimationFinish={handleAlertTimeout}
			/>
			<CustomeStyledButton
				title="Notification Custom Modal"
				kind="secondary"
				onPress={() => setCustomModal(true)}
			/>
			<Modal
				open={customModal}
				onPress={() => setCustomModal(false)}
				title="Notification"
				content="content goes here"
				hideSuccessIcon={true}>
				<View
					style={{
						width: '100%',
					}}>
					<Button
						title="Primary"
						kind="primary"
						onPress={() => setCustomModal(false)}
						style={{ marginBottom: 10 }}
					/>
				</View>
			</Modal>
		</View>
	);
};

export default DemoModalScreen;
