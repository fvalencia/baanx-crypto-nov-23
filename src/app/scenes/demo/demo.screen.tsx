import { RouteProp as ExRouteProp } from '@react-navigation/native';
import { StackNavigationProp as ExStackNavigationProp } from '@react-navigation/stack';
import React, { Fragment, useContext } from 'react';
import { SectionList, StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import {
	StyledHeader,
	StyledItem,
	StyledTouchableOpacity,
	StyledView,
} from './demo.screen.style';
import { DemoStackRoutes } from './demo.stack';

type RouteProp = ExRouteProp<DemoStackRoutes, 'DemoHome'>;
type ScreenNavigationProp = ExStackNavigationProp<DemoStackRoutes, 'DemoHome'>;

type DemoHomeScreenProps = {
	route: RouteProp;
	navigation: ScreenNavigationProp;
};

const DemoHomeScreen = ({ navigation }: DemoHomeScreenProps) => {
	const theme = useContext(ThemeContext);
	const atoms = ['Button', 'Check', 'Progress', 'Typography'];
	const molecules = [
		'Card',
		'Camera',
		'Form',
		'Modal',
		'ListElement',
		'Picker',
		'PushNotification',
		'Rating',
		'Slider',
		'Tag',
	];
	const organisms = ['Chat', 'Cars', 'FaceId', 'Drawer', 'Travel'];

	const handleItemPress = (component: string) => {
		navigation.navigate('DemoDetail', { componentDetail: component });
	};

	return (
		<Fragment>
			<StatusBar
				animated={true}
				translucent={true}
				showHideTransition="fade"
				barStyle={theme.statusBar.style}
				backgroundColor={theme.header.background}
			/>
			<StyledView>
				<SectionList
					sections={[
						{ title: 'Atoms', data: atoms },
						{
							title: 'Molecules',
							data: molecules,
						},
						{
							title: 'Organisms',
							data: organisms,
						},
					]}
					renderItem={({ item }) => (
						<StyledTouchableOpacity onPress={() => handleItemPress(item)}>
							<StyledItem>{item}</StyledItem>
						</StyledTouchableOpacity>
					)}
					renderSectionHeader={({ section }) => (
						<StyledHeader>{section.title}</StyledHeader>
					)}
					keyExtractor={item => item}
					style={{ marginBottom: 20 }}
				/>
			</StyledView>
		</Fragment>
	);
};

export default DemoHomeScreen;
