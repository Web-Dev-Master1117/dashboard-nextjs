'use client';

import { LineChart } from '@tremor/react';

const CHART_DATA = [
	{
		day: 'Mon',
		'Current Week': 50000,
		'Previous Week': 40000,
	},
	{
		day: 'Mon',
		'Current Week': 65000,
		'Previous Week': 50000,
	},
	{
		day: 'Tue',
		'Current Week': 70000,
		'Previous Week': 65000,
	},
	{
		day: 'Thu',
		'Current Week': 45000,
		'Previous Week': 75000,
	},
	{
		day: 'fri',
		'Current Week': 85000,
		'Previous Week': 80000,
	},
	{
		day: 'Sat',
		'Current Week': 100000,
		'Previous Week': 95000,
	},
	{
		day: 'Sun',
		'Current Week': 120000,
		'Previous Week': 100000,
	},
];

export default function TrafficLineChart() {
	return (
		<div className='space-y-3 rounded-xl bg-white p-5 shadow-md dark:bg-neutral-800 md:col-span-3'>
			<h1 className='text-xl font-semibold'>Total Users</h1>
			<LineChart
				className='mt-6'
				data={CHART_DATA}
				index='day'
				categories={['Current Week', 'Previous Week']}
				colors={['sky', 'lime']}
			/>
		</div>
	);
}
