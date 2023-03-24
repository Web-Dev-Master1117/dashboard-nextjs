import { classNames } from '@/utils';
import ProjectStatus from './ProjectStatus';
import TasksBarChart from './TasksBarChart';
import TasksTable from './TasksTable';

export const metadata = {
	title: 'Projects',
};

export default async function Projects() {
	return (
		<main className='dark:bg mx-auto space-y-5 p-4 md:p-10'>
			<h1 className='text-xl font-semibold'>Projects</h1>
			<div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
				{DATA.map((item, index) => (
					<div
						key={index}
						className={classNames(
							index % 2 ? 'bg-rose-100' : 'bg-sky-100',
							'space-y-2 rounded-xl p-5 text-black shadow-md'
						)}
					>
						<div className='flex items-center justify-between'>
							<h3 className='text-xl font-semibold'>{item.title}</h3>
							{item.icon}
						</div>

						<div className='flex items-center justify-between font-semibold'>
							<h3 className='text-2xl'>{item.number}</h3>
							<span className='flex items-center gap-x-1'>
								<span>{item.increase}</span>
								<i className='ph ph-trend-up text-xl'></i>
							</span>
						</div>
					</div>
				))}
			</div>

			<div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
				<ProjectStatus />
				<TasksTable />
			</div>
			<div className='grid grid-cols-1'>
				<TasksBarChart />
			</div>
		</main>
	);
}

const DATA = [
	{
		title: 'Total Projects',
		number: '25',
		increase: '+5.11%',
		icon: <i className='ph ph-folder-notch text-2xl'></i>,
	},
	{
		title: 'Total Tasks',
		number: '665',
		increase: '+20.15%',
		icon: <i className='ph ph-list-checks text-2xl'></i>,
	},
	{
		title: 'Members',
		number: '32',
		increase: '-2.87%',
		icon: <i className='ph ph-users-three text-2xl'></i>,
	},
	{
		title: 'Productivity',
		number: '80.20%',
		increase: '5.69%',
		icon: <i className='ph ph-battery-charging text-2xl'></i>,
	},
];
