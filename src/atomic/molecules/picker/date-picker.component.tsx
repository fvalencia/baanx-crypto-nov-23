import { Icon } from '@atomic/atoms';
import React, { Fragment, useContext, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ThemeContext } from 'styled-components/native';

import {
	PickerPressableStyled,
	PickerTitleStyled,
} from './picker.component.style';

type DatePickerProps = {
	mode: 'date' | 'time' | 'datetime' | undefined;
	isVisible: boolean;
	onPress: () => void;
	onCancel: () => void;
	placeholder?: string;
};

export const DatePicker = ({
	isVisible,
	onCancel,
	onPress,
	mode,
	placeholder = 'DD/MM/YYYY',
}: DatePickerProps) => {
	const theme = useContext(ThemeContext);
	const [dateTitle, setDateTitle] = useState(placeholder);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [pickerMode, setPickerMode] = useState(mode);

	const hidePicker = () => {
		setPickerMode(undefined);
	};

	const handleConfirm = (newDate: Date) => {
		// In order to prevent the double-shown popup bug on Android, picker has to be hidden first (https://github.com/react-native-datetimepicker/datetimepicker/issues/54#issuecomment-618776550)
		hidePicker();
		setCurrentDate(newDate);
		setDateTitle(
			`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`,
		);
		onCancel();
	};

	return (
		<Fragment>
			<PickerPressableStyled onPress={onPress}>
				<PickerTitleStyled placeholder={dateTitle === placeholder}>
					{dateTitle}
				</PickerTitleStyled>
				<Icon
					iconName="calendar-fill"
					size={theme.iconSize.xLarge}
					color={theme.color.primary}
				/>
			</PickerPressableStyled>

			<DateTimePickerModal
				isVisible={isVisible && pickerMode !== null}
				date={currentDate}
				mode={pickerMode}
				onConfirm={handleConfirm}
				onCancel={onCancel}
			/>
		</Fragment>
	);
};
