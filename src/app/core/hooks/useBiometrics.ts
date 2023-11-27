import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const useBiometrics = () => {
	const rnBiometrics = new ReactNativeBiometrics({
		allowDeviceCredentials: true,
	});

	const handleBiometrics = async (onSuccess: () => void) => {
		try {
			const { available, biometryType } =
				await rnBiometrics.isSensorAvailable();

			if (available) {
				const promptMessage =
					biometryType === BiometryTypes.TouchID
						? 'Confirm fingerprint'
						: biometryType === BiometryTypes.FaceID
						? 'Confirm face recognition'
						: 'Confirm biometrics';

				const { success } = await rnBiometrics.simplePrompt({
					promptMessage,
				});

				if (success) {
					onSuccess();
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		handleBiometrics,
	};
};

export default useBiometrics;
