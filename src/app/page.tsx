import { classNames } from '@/utils';
import TrafficByDevice from './TrafficByDevice';
import TrafficByLocation from './TrafficByLocation';
import TrafficByWebsite from './TrafficByWebsite';
import TrafficLineChart from './TrafficLineChart';

export default async function Home() {
	return (
		<main className='dark:bg mx-auto space-y-5 p-4 md:p-10'>
			<h1 className='text-xl font-semibold'>Overview</h1>
			<div className='grid grid-cols-2 justify-center gap-5 md:grid-cols-4'>
				{DATA.map((item, index) => (
					<div
						key={index}
						className={classNames(
							index % 2 ? 'bg-rose-100' : 'bg-sky-100',
							'space-y-2 rounded-xl p-5 text-black shadow-md'
						)}
					>
						<h3 className='text-xl font-semibold'>{item.title}</h3>
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
				<TrafficLineChart />
				<TrafficByWebsite />
			</div>

			<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
				<TrafficByDevice />
				<TrafficByLocation />
			</div>
		</main>
	);
}

const DATA = [
	{
		title: 'Views',
		number: '300k',
		increase: '+10.11%',
	},
	{
		title: 'Visits',
		number: '150k',
		increase: '+8.15%',
	},
	{
		title: 'New Users',
		number: '1,010',
		increase: '-0.87%',
	},
	{
		title: 'Active Users',
		number: '50k',
		increase: '-3.69%',
	},
];
