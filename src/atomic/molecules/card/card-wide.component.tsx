import { Button, Icon, IconFamily, Tag } from '@atomic/atoms';
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import {
	CardWideBodyStyled,
	CardWideContainerStyled,
	CardWideDescription,
	CardWideHeaderStyled,
	CardWideTagContainer,
	CardWideTitle,
} from './card-wide.component.style';

export type CardWideProps = {
	key: string;
	title: string;
	description: string;
	checkIcon: boolean;
	image: ReturnType<typeof require>;
	hasIcon: boolean;
	tag: {
		title: string;
		iconFamily: IconFamily;
		iconName: string;
	} | null;
};

export const CardWide = ({
	title,
	description,
	checkIcon,
	image,
	hasIcon,
	tag,
}: CardWideProps) => {
	const theme = useContext(ThemeContext);
	return (
		<CardWideContainerStyled
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.29,
				shadowRadius: 4.65,
				elevation: 7,
			}}>
			<TouchableOpacity
				style={{
					backgroundColor: 'white',
					position: 'absolute',
					right: 10,
					top: 10,
					zIndex: 10,
					borderRadius: 100,
					padding: 10,
				}}>
				<Icon
					iconName={
						checkIcon ? 'radio-button-on-fill' : 'radio-button-off-fill'
					}
					color={theme.brand.green}
					size={24}
				/>
			</TouchableOpacity>
			<CardWideTagContainer>
				{tag ? (
					<Tag label={tag?.title} size="small" kind="success" stickTo="left">
						{/* <Icon
						iconFamily="masterIcons"
						iconName="flag-fill"
						color="white"
						size={16}
					/> */}
					</Tag>
				) : null}
			</CardWideTagContainer>
			<CardWideHeaderStyled source={image} style={{ resizeMode: 'cover' }} />
			<CardWideBodyStyled>
				<CardWideTitle style={{ fontSize: 22 }}>{title}</CardWideTitle>
				<CardWideDescription>{description}</CardWideDescription>
				<Button
					title="ver mas"
					onPress={() => {}}
					style={{ marginBottom: 20, marginTop: 20 }}
				/>
			</CardWideBodyStyled>
		</CardWideContainerStyled>
	);
};
