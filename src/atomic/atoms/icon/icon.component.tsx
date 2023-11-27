import React, { useState } from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import icoMoonConfig from '@assets/fonts/selection.json';
import { MasterIconName } from './icon.name.type';

export type IconFamily =
	| 'antDesign'
	| 'entypo'
	| 'evilIcons'
	| 'feather'
	| 'fontAwesome'
	| 'fontAwesome5'
	| 'fontisto'
	| 'foundation'
	| 'ionicons'
	| 'materialCommunityIcons'
	| 'materialIcons'
	| 'octicons'
	| 'simpleLineIcons'
	| 'zocial'
	| 'masterIcons';

export type IconName = MasterIconName | String;

type IconProps = {
	iconFamily?: IconFamily;
	iconName: IconName;
	color: string;
	size: number;
};

/**
 *
 * @param iconFamily - Optional valid name according to the IconFamily type. The defaul value is "masterIcons"
 * @param iconName - A valid name based on the chosen family. You can see on this [website](https://oblador.github.io/react-native-vector-icons/) all valid names for all families, except masterIcons. To see valid names for the masterIcons family, check the `icons.screen.tsx` file, inside the Demo folder.
 * @param size - A number to be used as a font-size. The default value is 12.
 * @param color - A color to be configured for this icon.
 * @returns A styled icon component.
 */

export const Icon = ({
	iconFamily = 'masterIcons',
	iconName,
	...others
}: IconProps) => {
	const [iconFamilies] = useState({
		antDesign: AntDesign,
		entypo: Entypo,
		evilIcons: EvilIcons,
		feather: Feather,
		fontAwesome: FontAwesome,
		fontAwesome5: FontAwesome5,
		fontisto: Fontisto,
		foundation: Foundation,
		ionicons: Ionicons,
		materialCommunityIcons: MaterialCommunityIcons,
		materialIcons: MaterialIcons,
		octicons: Octicons,
		simpleLineIcons: SimpleLineIcons,
		zocial: Zocial,
		masterIcons: createIconSetFromIcoMoon(
			icoMoonConfig,
			'mastericons',
			'mastericons.ttf',
		),
	});

	const MasterIcon = iconFamilies[iconFamily];

	return <MasterIcon name={iconName as string} {...others} />;
};
