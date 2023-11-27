import React, { FC, Fragment, useContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import {
	ButtonContainer,
	ButtonText,
	StyledIcon,
	StyledLottieView,
} from './button.component.style';

export type Kind = 'primary' | 'secondary' | 'tertiary' | 'link';
export type Size = 'regular' | 'small';

export interface ButtonProp {
	title: string;
	onPress: () => void;
	icon?: string;
	kind?: Kind;
	disabled?: boolean;
	size?: Size;
	style?: StyleProp<ViewStyle>;
	processing?: boolean;
}

/**
 * Button Component
 *
 * @param title - Required, string title of the button to be displayed.
 * @param onPress - Required, callback function when the button is pressed.
 * @param kind - A style of button by default value is "primary"
 * @param disabled - A boolean value for disabling the button.
 * @param size - A size for the button the default value is "regular".
 * @param style - A style prop for extending the container styles.
 * @param icon - A valid icon name from the mastersIcon family
 * @param processing - A Valid boolean for enabling a processing animation in the button.
 *
 * @returns A styled Button Component.
 */
export const Button: FC<ButtonProp> = ({
	title,
	onPress,
	kind = 'primary',
	disabled,
	size = 'regular',
	style,
	icon,
	processing,
}) => {
	const theme = useContext(ThemeContext);

	const sharedProps = {
		kind,
		disabled,
		size,
	};

	return (
		<ButtonContainer
			{...sharedProps}
			onPress={onPress}
			disabled={disabled}
			style={style}>
			{!processing ? (
				<Fragment>
					<ButtonText {...sharedProps}>{title}</ButtonText>
					{icon && (
						<StyledIcon
							iconName={icon}
							size={theme.iconSize.medium}
							color={
								kind === 'primary'
									? disabled
										? theme.color.white
										: theme.color.white
									: kind === 'secondary'
									? disabled
										? theme.color.grayLight
										: theme.color.primary
									: kind === 'tertiary'
									? theme.color.white
									: theme.color.alert
							}
						/>
					)}
				</Fragment>
			) : null}
			<StyledLottieView
				processing={processing}
				source={require('./procesing-animation.json')}
				autoPlay
				loop
			/>
		</ButtonContainer>
	);
};
