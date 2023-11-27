import { PassCodeDisplay, PassCodeKeyboard } from '@atomic/atoms';
import React, { FC, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { PassCodeContainerStyled } from './pass-code.style';

type PassCodeProps = {
	passCode?: Array<string>;
	correctPasscode: string;
	onSuccess: () => void;
	onFail: () => void;
};

const { width } = Dimensions.get('screen');

const passcodeLength = 6;
const passCodeSize = width / (passcodeLength + 2);

/**
 * PassCode component
 * @param {Array<string>} passCode - A predefined passcode
 * @param {string} correctPasscode - The correct passcode
 * @param {() => void} onSuccess - on success callback
 * @param {() => void} onFail - on fail callback
 * @returns {React.ReactElement} PassCode component
 * @example
 * <PassCode
 *    passCode={[]}
 *    correctPasscode='1166'
 *    onSuccess={() =>
 *      Alert.alert('Success', 'You have entered the correct passcode')
 *    }
 *    onFail={() =>
 *      Alert.alert('Fail', 'You have entered the wrong passcode')
 *    }
 * />
 *
 * @see [PassCode docs](https://labs.mastercard.com/gitlab8/LaunchPad/launchpad-react-native-template-v2/wikis/pass-code)
 */
export const PassCode: FC<PassCodeProps> = ({
	passCode = [],
	correctPasscode,
	onSuccess,
	onFail,
}) => {
	const [passcode, setPasscode] = React.useState<Array<string>>(passCode);
	const isValid = useSharedValue(false);

	useEffect(() => {
		if (passcode.length === passcodeLength) {
			if (passcode.join('') === correctPasscode) {
				isValid.value = true;
				onSuccess();
			} else {
				isValid.value = false;
				onFail();
			}
		}
	}, [passcode, isValid, correctPasscode, onSuccess, onFail]);

	return (
		<PassCodeContainerStyled>
			<PassCodeDisplay
				isValid={isValid}
				passcode={passcode}
				passcodeSize={passCodeSize}
				passcodeLength={passcodeLength}
				correctPasscode={correctPasscode}
			/>
			{/* <PassCodeDisplayDescriptionStyled>
				Enter the access code to get started.
			</PassCodeDisplayDescriptionStyled> */}
			<PassCodeKeyboard
				onPress={(char: number | string) => {
					if (char === 'delete') {
						setPasscode((valeu: Array<string>) => {
							return valeu.length === 0 ? [] : valeu.slice(0, valeu.length - 1);
						});
						return;
					}
					if (passcode.length === passcodeLength) {
						return;
					}
					setPasscode(oldPassCode => {
						return [...oldPassCode, String(char)];
					});
				}}
			/>
		</PassCodeContainerStyled>
	);
};
