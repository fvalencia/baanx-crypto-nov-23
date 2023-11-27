import React from 'react';
import { View } from 'react-native';

import { ProgressBar } from '@atomic/atoms';
import { ProgressBox, ProgressStep } from '@atomic/molecules';

const DemoProgressScreen = () => {
	return (
		<View>
			<View style={{ flex: 1, padding: 20 }}>
				<ProgressBar step={1} steps={5} />
			</View>
			<View style={{ flex: 1, padding: 20 }}>
				<ProgressBar initialStep={1} step={2} steps={5} />
			</View>
			<View style={{ flex: 1, padding: 20 }}>
				<ProgressBar initialStep={2} step={3} steps={5} />
			</View>
			<View style={{ flex: 1, padding: 20 }}>
				<ProgressBar initialStep={3} step={4} steps={5} />
			</View>
			<View style={{ flex: 1, padding: 20 }}>
				<ProgressBar initialStep={4} step={5} steps={5} />
			</View>
			<View
				style={{ paddingBottom: 10, paddingHorizontal: 20, paddingTop: 20 }}>
				<ProgressBox boxes={10} fill={8} />
			</View>
			<View style={{ paddingBottom: 10, paddingHorizontal: 20 }}>
				<ProgressBox boxes={4} fill={3} />
			</View>
			<View style={{ paddingBottom: 0, paddingHorizontal: 20 }}>
				<ProgressBox boxes={6} fill={0} />
			</View>
			<View style={{ padding: 20, paddingTop: 20 }}>
				<ProgressStep
					steps={[
						{
							checked: true,
						},
						{
							checked: true,
						},
						{
							checked: false,
						},
						{
							checked: false,
						},
						{
							checked: false,
						},
					]}
				/>
				<ProgressStep
					steps={[
						{
							checked: true,
						},
						{
							checked: true,
						},
						{
							checked: false,
						},
						{
							checked: false,
						},
					]}
				/>
				<ProgressStep
					steps={[
						{
							checked: true,
						},
						{
							checked: true,
						},
						{
							checked: false,
						},
					]}
				/>
			</View>
			<View style={{ padding: 20 }}>
				<ProgressStep
					steps={[
						{
							label: 'Label',
							checked: true,
						},
						{
							label: 'Label',
							checked: true,
						},
						{
							label: 'Label',
							checked: false,
						},
						{
							label: 'Label',
							checked: false,
						},
					]}
				/>
				<ProgressStep
					steps={[
						{
							label: 'Approved',
							checked: true,
						},
						{
							label: 'Sent',
							checked: true,
						},
						{
							label: 'Received',
							checked: false,
						},
					]}
				/>
			</View>
		</View>
	);
};

export default DemoProgressScreen;
