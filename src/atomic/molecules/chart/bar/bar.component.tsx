import React, { FC, useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';

import { ChartDataPoint } from '..';
import { StyledContainer, StyledWrapper } from './bar.component.style';

export interface BarChartProp {
	data: ChartDataPoint[];
	yTickRange?: number[];
}

const getRange = (maxValue: number, steps: number) => {
	const range = [];
	const increment = maxValue / steps;
	for (let index = 0; index < maxValue; index += increment) {
		range.push(index);
	}
	range.push(maxValue);
	return range;
};

/**
 * BarChart Component
 *
 * @param data - A valid array of data points to display each bar of the chart.
 * @param yTickRange - A valid array of range ticks for the y axis, example [200, 300, 400, 500]
 *
 * @returns Styled BarChart
 */
export const BarChart: FC<BarChartProp> = ({ data, yTickRange }) => {
	const theme = useContext(ThemeContext);
	const { width } = useWindowDimensions();
	const chartData = data.map(d => ({ x: d.label, y: d.value, fill: d.color }));
	const maxValue =
		chartData.reduce((acc, current) => (current.y > acc ? current.y : acc), 0) *
		1.2;
	const defaultYTickRange = getRange(maxValue, 5);

	return (
		<StyledWrapper>
			<StyledContainer>
				<VictoryChart domainPadding={{ x: 8 }} width={width}>
					<VictoryAxis
						style={{
							axis: { stroke: 'none' },
							tickLabels: { stroke: theme.color.grayLight },
						}}
					/>
					<VictoryAxis
						dependentAxis
						tickValues={yTickRange || defaultYTickRange}
						style={{
							axis: { stroke: 'none' },
							tickLabels: { stroke: theme.color.grayLight },
							grid: {
								stroke: theme.color.grayLight,
							},
						}}
					/>
					<VictoryBar
						cornerRadius={4}
						scale={{ y: 'linear', x: 'linear' }}
						barRatio={1.1}
						height={10}
						data={chartData}
						animate={{
							duration: 1000,
							onExit: {
								duration: 1000,
							},
							onEnter: {
								duration: 500,
							},
						}}
						style={{
							labels: {
								display: 'none',
							},
							data: {
								fill: ({ datum }) => datum.fill,
							},
						}}
						labels={({ datum }) => datum.y}
						events={[
							{
								target: 'data',
								eventHandlers: {
									onPress: () => {
										return [
											{
												target: 'data',
												mutation: props => {
													const fill = props.style && props.style.fill;
													return fill === theme.color.primary
														? null
														: { style: { fill: theme.color.primary } };
												},
											},
											{
												target: 'labels',
												mutation: props => {
													const display = props.style && props.style.display;
													return display === 'initial'
														? null
														: {
																style: { display: 'initial', fontSize: 20 },
																backgroundStyle: { fill: theme.color.primary },
																backgroundPadding: {
																	top: 15,
																	bottom: 10,
																	left: 20,
																	right: 20,
																},
																dy: -40,
														  };
												},
											},
										];
									},
								},
							},
						]}
					/>
				</VictoryChart>
			</StyledContainer>
		</StyledWrapper>
	);
};
