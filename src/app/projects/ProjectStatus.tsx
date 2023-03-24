'use client';

import { DonutChart } from '@tremor/react';

const DATA = [
	{
		name: 'Completed',
		percentage: 58.5,
	},
	{
		name: 'In Progress',
		percentage: 27.5,
	},
	{
		name: 'Behind',
		percentage: 14,
	},
];
export default function ProjectStatus() {
	return (
		<div className='space-y-3 rounded-xl bg-white p-5 shadow-md dark:bg-neutral-800'>
			<h1 className='text-xl font-semibold'>Project Status</h1>
			<DonutChart
				data={DATA}
				category='percentage'
				index='name'
				valueFormatter={(number) => number + '%'}
				showLabel={false}
				className='mx-auto w-36'
				colors={['sky', 'lime', 'rose']}
			/>
			<ul className='space-y-3'>
				<li className='flex justify-between'>
					<span className='flex items-center gap-x-2 before:h-2 before:w-2 before:rounded-full before:bg-sky-400'>
						Completed
					</span>
					<span>58.5%</span>
				</li>
				<li className='flex justify-between'>
					<span className='flex items-center gap-x-2 before:h-2 before:w-2 before:rounded-full before:bg-lime-400'>
						In Progress
					</span>
					<span>14%</span>
				</li>
				<li className='flex justify-between'>
					<span className='flex items-center gap-x-2 before:h-2 before:w-2 before:rounded-full before:bg-rose-400'>
						Behind
					</span>
					<span>14%</span>
				</li>
			</ul>
		</div>
	);
}
