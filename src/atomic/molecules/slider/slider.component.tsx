import React, { FC } from 'react';

import {
	StyledCenteredView,
	StyledFooterText,
	StyledMainText,
	StyledSlider,
	StyledSpacedView,
	ThumbButton,
} from './slider.component.style';

export interface SliderProps {
	value: number;
	onValueChange: (value: number) => void;
	min: number;
	max: number;
	step: number;
}

/**
 * Slider Component
 *
 * @param value - A valid current value for the slider.
 * @param onValueChange - A callback function triggered when the user moves the thumb.
 * @param min - A valid min value.
 * @param max - A valid max value.
 * @param step - A value that represents the increment for the value.
 *
 * @returns Styled Slider
 */
export const Slider: FC<SliderProps> = ({
	value,
	onValueChange,
	min,
	max,
	step,
}) => {
	return (
		<StyledCenteredView>
			<StyledMainText>${value}</StyledMainText>
			<StyledSlider
				value={value}
				onValueChange={onValueChange}
				maximumValue={max}
				minimumValue={min}
				step={step}
				thumbProps={{
					children: <ThumbButton />,
				}}
			/>
			<StyledSpacedView>
				<StyledFooterText>${min}</StyledFooterText>
				<StyledFooterText>${max}</StyledFooterText>
			</StyledSpacedView>
		</StyledCenteredView>
	);
};
