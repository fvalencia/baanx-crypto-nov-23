import { Check, Icon } from '@atomic/atoms';
import React, { Fragment, useCallback, useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import {
	ItemContainerPressableStyled,
	ListContainerStyled,
	ListContentStyled,
	ListItemContainerStyled,
	ListItemTitleStyled,
	ModalStyled,
	PickerPressableStyled,
	PickerTitleStyled,
} from './picker.component.style';

type PickerProps = {
	listTitle: string;
	placeholder: string;
	defaultValue?: string;
	data: any[];
	onSelectChange?: (value: string) => void;
};

type ItemProps = {
	title: string;
	itemSelected: boolean;
	onSelect: (value: string) => void;
};

export const Picker = ({
	placeholder,
	defaultValue,
	onSelectChange,
	data,
	listTitle,
}: PickerProps) => {
	const theme = useContext(ThemeContext);

	const [isPickerOpen, setIsPickerOpen] = useState(false);
	const [pickerTitle, setPickerTitle] = useState(defaultValue || placeholder);
	const [selected, setSelected] = useState(new Map());

	const onStatusSelect = useCallback(
		(title: string) => {
			const newSelected = new Map();
			newSelected.set(title, !selected.get(title));
			setSelected(newSelected);
			setPickerTitle(title);
			setIsPickerOpen(false);
			if (onSelectChange) {
				onSelectChange(title);
			}
		},
		[selected, onSelectChange],
	);

	const Item = ({ title, itemSelected, onSelect }: ItemProps) => {
		return (
			<ItemContainerPressableStyled onPress={() => onSelect(title)}>
				<PickerTitleStyled>{title}</PickerTitleStyled>
				<Check initialValue={itemSelected} kind="radio" color="success" />
			</ItemContainerPressableStyled>
		);
	};

	return (
		<Fragment>
			<PickerPressableStyled onPress={() => setIsPickerOpen(true)}>
				<PickerTitleStyled placeholder={pickerTitle === placeholder}>
					{pickerTitle}
				</PickerTitleStyled>
				<Icon
					iconName="arrow-ios-downward-fill"
					size={theme.iconSize.xLarge}
					color={theme.color.primary}
				/>
			</PickerPressableStyled>

			<ModalStyled
				isVisible={isPickerOpen}
				animationIn="slideInUp"
				animationOut="slideOutDown"
				backdropTransitionOutTiming={0}
				scrollHorizontal={true}
				onBackdropPress={() => setIsPickerOpen(false)}>
				<ListContainerStyled>
					<ListContentStyled>
						<ListItemContainerStyled>
							<ListItemTitleStyled>{listTitle}</ListItemTitleStyled>
						</ListItemContainerStyled>
						<FlatList
							data={data}
							nestedScrollEnabled={true}
							renderItem={({ item }) => (
								<Item
									title={item.title}
									itemSelected={!!selected.get(item.title)}
									onSelect={onStatusSelect}
								/>
							)}
							keyExtractor={item => item.id}
							extraData={selected}
						/>
					</ListContentStyled>
				</ListContainerStyled>
			</ModalStyled>
		</Fragment>
	);
};
