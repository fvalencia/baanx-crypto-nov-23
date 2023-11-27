import { RouteProp as ExRouteProp } from '@react-navigation/native';
import { StackNavigationProp as ExStackNavigationProp } from '@react-navigation/stack';
import React, { Fragment, JSXElementConstructor } from 'react';

import { DemoStackRoutes } from './demo.stack';

type RouteProp = ExRouteProp<DemoStackRoutes, 'DemoDetail'>;
type ScreenNavigationProp = ExStackNavigationProp<
	DemoStackRoutes,
	'DemoDetail'
>;

type DemoDetailScreenProps = {
	route: RouteProp;
	navigation: ScreenNavigationProp;
};

const routeName = './components/';
const extension = '.screen.tsx';

// Add new components here ...
const components: { [key: string]: JSXElementConstructor<any> } = {
	// Atoms
	Button: require(`${routeName}button${extension}`).default,
	Check: require(`${routeName}check${extension}`).default,
	Progress: require(`${routeName}progress${extension}`).default,
	Typography: require(`${routeName}typography${extension}`).default,

	// Molecules
	Card: require(`${routeName}card${extension}`).default,
	Camera: require(`${routeName}camera${extension}`).default,
	Form: require(`${routeName}form${extension}`).default,
	ListElement: require(`${routeName}list-element${extension}`).default,
	Modal: require(`${routeName}modal${extension}`).default,
	Picker: require(`${routeName}picker${extension}`).default,
	PushNotification: require(`${routeName}push-notification${extension}`)
		.default,
	Slider: require(`${routeName}slider${extension}`).default,
};

const DemoDetailScreen = ({ route }: DemoDetailScreenProps) => {
	const { componentDetail } = route.params;
	const extract = (key: string) => components[key];
	const RenderComponent = extract(componentDetail);

	return (
		<Fragment>
			<RenderComponent />
		</Fragment>
	);
};

export default DemoDetailScreen;
