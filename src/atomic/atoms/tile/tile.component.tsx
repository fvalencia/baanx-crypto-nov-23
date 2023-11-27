import React, { FC, Fragment, ReactElement, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { Check } from '../check/check.component';
import { CheckContainerStyled, TileContainerStyled } from './tile.style';

export type TileProps = {
	onPress: () => void;
	selected: boolean;
	dividedBy: number;
	children: ReactElement;
};

/**
 * Tile component
 *
 * @param {number} dividedBy
 * @param {boolean} selected
 * @param {() => void} onPress
 * @param {ReactElement} children
 *
 * @returns {ReactElement} Styled Tile component
 *
 * @example
 *
 * <Tile
 * 	dividedBy={3}
 * 	onPress={() => console.log('Do something')}
 * 	selected={false}>
 * 		<Body>Samnple children</Body>
 * </Tile>
 *
 * @see [Tile docs](https://labs.mastercard.com/gitlab8/LaunchPad/launchpad-react-native-template-v2/wikis/tile)
 */

export const Tile: FC<TileProps> = ({
	children,
	onPress,
	selected,
	dividedBy = 3,
}) => {
	const theme = useContext(ThemeContext);
	return (
		<TileContainerStyled
			dividedBy={dividedBy}
			onPress={onPress}
			selected={selected}
			style={{
				shadowColor: theme.color.gray,
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.45,
				shadowRadius: 3,
				elevation: 3,
			}}>
			<Fragment>
				<CheckContainerStyled>
					<Check
						kind="checkbox"
						value={selected}
						controlled={true}
						color={selected ? 'success' : 'neutral'}
					/>
				</CheckContainerStyled>
				{children}
			</Fragment>
		</TileContainerStyled>
	);
};
