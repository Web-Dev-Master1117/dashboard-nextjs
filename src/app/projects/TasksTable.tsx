'use client';
import { classNames, tw } from '@/utils';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from '@tremor/react';
import Image from 'next/image';

export default function TasksTable() {
	return (
		<div className='space-y-3 rounded-xl bg-white p-5 shadow-md dark:bg-neutral-800 md:col-span-3'>
			<h1 className='text-xl font-semibold'>Tasks</h1>
			<Table className='mt-5'>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Assigned to</TableHeaderCell>
						<TableHeaderCell>Time span</TableHeaderCell>
						<TableHeaderCell>Status</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{DATA.map((item, index) => (
						<TableRow key={item.name}>
							<TableCell>{item.name}</TableCell>
							<TableCell className='flex'>
								<Image
									height={28}
									width={28}
									src={`https://xsgames.co/randomusers/assets/avatars/female/1${index}.jpg`}
									alt='A'
									className='rounded-full'
								/>

								{Boolean(index % 2) && (
									<Image
										height={28}
										width={28}
										src={`https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`}
										alt='A'
										className='-ml-2 rounded-full'
									/>
								)}
								{index === 1 && (
									<Image
										height={28}
										width={28}
										src={`https://xsgames.co/randomusers/assets/avatars/female/2${index}.jpg`}
										alt='A'
										className='-ml-2 rounded-full'
									/>
								)}
							</TableCell>
							<TableCell>
								{index + 1}hr {30 - index * 5}min
							</TableCell>
							<TableCell>
								<span
									className={classNames(
										item.twColor,
										'flex items-center gap-x-2 before:h-2 before:w-2 before:rounded-full'
									)}
								>
									{item.status}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

const DATA = [
	//cspell:disable
	{
		name: 'Viola Amherd',
		Role: 'Federal Councillor',
		status: 'In Progress',
		twColor: tw`before:bg-purple-400 text-purple-400`,
	},
	{
		name: 'Simonetta Sommaruga',
		Role: 'Federal Councillor',
		status: 'Completed',
		twColor: tw`before:bg-green-400 text-green-400 `,
	},
	{
		name: 'Alain Berset',
		Role: 'Federal Councillor',
		status: 'Pending',
		twColor: tw`before:bg-sky-400 text-sky-400 `,
	},
	{
		name: 'Ignazio Cassis',
		Role: 'Federal Councillor',
		status: 'Approved',
		twColor: tw`before:bg-yellow-400 text-yellow-400`,
	},
	{
		name: 'Ueli Maurer',
		Role: 'Federal Councillor',
		status: 'Rejected',
		twColor: tw`before:bg-gray-400 text-gray-400`,
	},
	//cspell:enable
];
