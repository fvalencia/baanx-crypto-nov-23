import Color from 'color';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import {
	SlideContainerStyled,
	SlideDescriptionStyled,
	SlideImageStyled,
	SlideTitleStyled,
} from './slide.component.style';

export interface SlideProps {
	slide: {
		color: string;
		title: string;
		description: string;
		picture: ReturnType<typeof require>;
	};
}

const Slide = ({
	slide: { picture, color, title, description },
}: SlideProps) => {
	const lighterColor = Color(color).lighten(0.8).toString();
	const { width, height } = useWindowDimensions();

	return (
		<>
			<Svg style={StyleSheet.absoluteFill}>
				<Defs>
					<RadialGradient id="gradient" cx="50%" cy="35%">
						<Stop offset="0%" stopColor={lighterColor} />
						<Stop offset="100%" stopColor={color} />
					</RadialGradient>
				</Defs>
				<Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
			</Svg>
			<SlideContainerStyled>
				<SlideImageStyled source={picture} />
				<View>
					<SlideTitleStyled>{title}</SlideTitleStyled>
					<SlideDescriptionStyled>{description}</SlideDescriptionStyled>
				</View>
			</SlideContainerStyled>
		</>
	);
};

export default Slide;
