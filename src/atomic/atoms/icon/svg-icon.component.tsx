import React, { FC } from 'react';
import { ColorValue } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

export type SvgIconProps = {
	id: string;
	title: string;
	width: number;
	height: number;
	inactiveColor: ColorValue;
	gradientColor: {
		from: ColorValue;
		to: ColorValue;
	};
	d: string;
	isActive: boolean;
};

/**
 * SvgIcon component
 * @param {string} id - The id of the icon
 * @param {string} title - The title of the icon
 * @param {number} width - The width of the icon
 * @param {number} height - The height of the icon
 * @param {ColorValue} inactiveColor - The inactive color of the icon
 * @param {Object{from: ColorValue , to: ColorValue}} gradientColor - The gradient colors of the icon
 * @param {boolean} isActive - The active state of the icon
 * @param {string} d - The path of the icon
 * @returns {React.Element} - SvgIcon component
 *
 * @example
 *
 * <SvgIcon
 * 	d={...}
 * 	id={1}
 * 	width={60}
 * 	height={60}
 * 	title='Sample title'
 * 	isActive={true}
 * 	inactiveColor="#C1C1C1"
 * 	gradientColor={{
 *			from: '#ff0000',
 *			to: '#ff9900',
 * 	}}
 * />
 *
 * @see [SvgIcon docs](https://labs.mastercard.com/gitlab8/LaunchPad/launchpad-react-native-template-v2/wikis/svg-icon)
 */
export const SvgIcon: FC<SvgIconProps> = ({
	width,
	height,
	d,
	inactiveColor,
	gradientColor,
	isActive,
}) => {
	let fill;

	if (isActive) {
		fill = 'url(#grad)';
	} else {
		fill = inactiveColor;
	}

	return (
		<Svg width={width} height={height} viewBox="0 0 56 56">
			<Defs>
				<LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
					<Stop offset="0" stopColor={gradientColor?.from} stopOpacity="1" />
					<Stop offset="1" stopColor={gradientColor?.to} stopOpacity="1" />
				</LinearGradient>
			</Defs>

			<Path fillRule="evenodd" clipRule="evenodd" fill={fill} d={d} />
		</Svg>
	);
};
