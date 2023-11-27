import { Body, BodyBold, H1, H2, H3, H4, H5, H5Bold, H6 } from '@atomic/atoms';
import React from 'react';
import { ScrollView, View } from 'react-native';

const DemoTypographyScreen = () => {
	return (
		<ScrollView>
			<View style={{ display: 'flex', flexDirection: 'column' }}>
				<H1>H1 title</H1>
				<H2>H2 title</H2>
				<H3>H3 title</H3>
				<H4>H4 title</H4>
				<H5>H5 title</H5>
				<H5Bold>H5Bold title</H5Bold>
				<H6>H6 title</H6>
				<Body>Body title</Body>
				<BodyBold>BodyBold title</BodyBold>
			</View>
		</ScrollView>
	);
};

export default DemoTypographyScreen;
