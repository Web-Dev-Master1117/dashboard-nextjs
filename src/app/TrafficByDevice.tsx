'use client';

import { BarChart } from '@tremor/react';

const CHART_DATA = [
	{
		device: 'Android',
		visitors: 50000,
	},
	{
		device: 'iOS',
		visitors: 20000,
	},
	{
		device: 'Windows',
		visitors: 60000,
	},
	{
		device: 'Linux',
		visitors: 10000,
	},
	{
		device: 'Other',
		visitors: 30000,
	},
];

export default function TrafficByDevice() {
	return (
		//TODO remove fixed w on prod
		<div className='space-y-3 rounded-xl bg-white p-5 shadow-md dark:bg-neutral-800'>
			<h1 className='text-xl font-semibold'>Traffic By Device</h1>
			<BarChart
				data={CHART_DATA}
				index='device'
				categories={['visitors']}
				colors={['lime', 'purple', 'sky', 'orange', 'teal']}
			/>
		</div>
	);
}
