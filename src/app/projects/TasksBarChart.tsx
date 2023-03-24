'use client';

import { BarChart } from '@tremor/react';

const chartData = [
	{
		name: 'Sprint 1',
		year: 2011,
		value: 12,
	},
	{
		name: 'Sprint 2',
		year: 2012,
		value: 16,
	},
	{
		name: 'Sprint 3',
		year: 2013,
		value: 10,
	},
	{
		name: 'Sprint 4',
		year: 2014,
		value: 25,
	},
	{
		name: 'Sprint 5',
		year: 2015,
		value: 19,
	},
	{
		name: 'Sprint 6',
		year: 2016,
		value: 30,
	},
	{
		name: 'Sprint 7',
		year: 2017,
		value: 45,
	},
	{
		name: 'Sprint 8',
		year: 2018,
		value: 35,
	},
	{
		name: 'Sprint 9',
		year: 2019,
		value: 25,
	},
	{
		name: 'Sprint 10',
		year: 2020,
		value: 20,
	},
	{
		name: 'Sprint 11',
		year: 2021,
		value: 10,
	},
	{
		name: 'Sprint 12',
		year: 2022,
		value: 28,
	},
];

export default function TasksBarChart() {
	return (
		<div className='space-y-3 rounded-xl bg-white p-5 shadow-md dark:bg-neutral-800'>
			<h1 className='text-xl font-semibold'>Tasks Overview</h1>
			<BarChart
				data={chartData}
				index='name'
				categories={['value']}
				colors={['sky']}
			/>
		</div>
	);
}
