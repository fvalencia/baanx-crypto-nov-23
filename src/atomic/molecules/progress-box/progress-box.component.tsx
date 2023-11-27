import React, { FC } from 'react';

import { Container, ViewElement } from './progress-box.component.style';

export interface ProgressBoxProps {
	boxes: number;
	fill: number;
}

/**
 * ProgressBox Component
 *
 * boxes - a valid number of boxes to be displayed.
 * gill - a valid number of boxes that are filled.
 *
 * @returns Styled ProgressBox
 */
export const ProgressBox: FC<ProgressBoxProps> = ({ boxes, fill }) => {
	return (
		<Container style={{ flexDirection: 'row' }}>
			{Array.from(Array(boxes).keys()).map(e => (
				<ViewElement key={e} boxes={boxes} fill={fill} element={e} />
			))}
		</Container>
	);
};
