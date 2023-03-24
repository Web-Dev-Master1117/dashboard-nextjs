'use client';

import { classNames, tw } from '@/utils';
import { DonutChart } from '@tremor/react';

const CHART_DATA = [
	{
		name: 'USA',
		percentage: 33.5,
		twColor: tw`before:bg-sky-400`,
	},
	{
		name: 'Canada',
		percentage: 20.6,
		twColor: tw`before:bg-red-400`,
	},
	{
		name: 'Mexico',
		percentage: 12.7,
		twColor: tw`before:bg-green-400`,
	},
	{
		name: 'UK',
		percentage: 22.3,
		twColor: tw`before:bg-yellow-400`,
	},
	{
		name: 'EU',
		percentage: 10.5,
		twColor: tw`before:bg-blue-400`,
	},
	{
		name: 'Others',
		percentage: 4.4,
		twColor: tw`before:bg-violet-400`,
	},
];

export default function TrafficByLocation() {
	return (
		<div className='space-y-3 rounded-xl bg-white p-5 shadow-md dark:bg-neutral-800'>
			<h1 className='text-xl font-semibold'>Traffic By Country</h1>
			<DonutChart
				data={CHART_DATA}
				category='percentage'
				index='name'
				valueFormatter={(number) => number + '%'}
				showLabel={false}
				className='mx-auto w-36'
				colors={['sky', 'red', 'green', 'yellow', 'blue', 'violet']}
			/>
			<ul className='space-y-2'>
				{[
					CHART_DATA.map((item, index) => (
						<li key={index} className='flex justify-between'>
							<span
								className={classNames(
									item.twColor,
									'flex items-center gap-x-2 before:h-2 before:w-2 before:rounded-full'
								)}
							>
								{item.name}
							</span>
							<span>{item.percentage}%</span>
						</li>
					)),
				]}
			</ul>
		</div>
	);
}
