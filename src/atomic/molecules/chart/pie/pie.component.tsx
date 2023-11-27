import { useFocusEffect } from '@react-navigation/native';
import React, { FC, useCallback, useState } from 'react';
import { VictoryPie } from 'victory-native';

import { ChartDataPoint } from '..';
import {
	AvgDescriptionItem,
	AvgDomesticTitle,
	AvgInternationsTitle,
	AvgValueContainer,
	AvgValueItem,
	StyledCenteredContainer,
	StyledContainer,
	StyledTitleText,
	StyledWrapper,
} from './pie.component.style';

export interface PieChartProp {
	mainTitle: string;
	secondaryTitle: string;
	data: ChartDataPoint[];
}

/**
 * PieChart Component
 *
 * @param mainTitle - A valid title to be displayed in the middle of the chart.
 * @param secondaryTitle - A valid title to be displayed in the middle of the chart underneeth the main title.
 * @param data - A valid array of data points that represent each section of the pie.
 *
 * @returns Styled PieChart
 */
export const PieChart: FC<PieChartProp> = ({
	mainTitle,
	secondaryTitle,
	data,
}) => {
	const [angle, setAngle] = useState(0);
	const chartData = data.map(row => ({
		x: row.label,
		y: row.value,
		fill: row.color,
	}));

	useFocusEffect(
		useCallback(() => {
			setAngle(360);
			return () => {
				setAngle(0);
			};
		}, []),
	);

	return (
		<StyledWrapper>
			<StyledContainer>
				<StyledCenteredContainer>
					<StyledTitleText>{mainTitle}</StyledTitleText>
					<AvgValueContainer>
						<AvgValueItem>
							<AvgDomesticTitle>$8.73</AvgDomesticTitle>
							<AvgDescriptionItem>domestic clients</AvgDescriptionItem>
						</AvgValueItem>
						<AvgValueItem>
							<AvgInternationsTitle>$12.25</AvgInternationsTitle>
							<AvgDescriptionItem>Internations clients</AvgDescriptionItem>
						</AvgValueItem>
					</AvgValueContainer>
				</StyledCenteredContainer>
				<VictoryPie
					data={chartData}
					innerRadius={90}
					radius={150}
					labels={[]}
					animate={{ duration: 1000 }}
					padAngle={() => 0}
					endAngle={angle}
					style={{
						data: {
							fill: ({ datum }) => datum.fill,
						},
					}}
				/>
			</StyledContainer>
		</StyledWrapper>
	);
};
