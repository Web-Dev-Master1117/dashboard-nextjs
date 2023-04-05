'use client';

import { sidebarOpenState } from '@/recoil/atoms';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Sidebar() {
	const [sideBarOpen, setSidebarOpen] = useRecoilState(sidebarOpenState);

	const lgMediaQuery = window.matchMedia('(min-width: 1280px)');
	const [isLg, setIsLg] = useState(lgMediaQuery.matches);

	lgMediaQuery.onchange = (event) => {
		setSidebarOpen(false);
		setIsLg(event.matches);
	};

	const pathname = usePathname();
	useEffect(() => {
		if (!isLg) setSidebarOpen(false);
	}, [isLg, pathname, setSidebarOpen]);

	return (
		<>
			{!isLg && (
				<Transition show={sideBarOpen} as={Fragment}>
					<Dialog
						as='div'
						className='relative z-40'
						onClose={() => setSidebarOpen(false)}
					>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='fixed inset-0 bg-black/75' />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter='duration-300'
							enterFrom='-translate-x-[240px]'
							enterTo='translate-x-0'
							leave='duration-300'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-[240px]'
						>
							<Dialog.Panel
								as='nav'
								className='fixed top-0 left-0 h-screen min-w-[240px] border-r bg-white px-8 pb-5 duration-300 dark:border-gray-400 dark:bg-neutral-900'
							>
								<SidebarInner />
							</Dialog.Panel>
						</Transition.Child>
					</Dialog>
				</Transition>
			)}

			{isLg && (
				<Transition
					show={sideBarOpen}
					as='nav'
					enter='duration-300'
					enterFrom='-ml-[240px] -translate-x-[240px]'
					enterTo='ml-0 translate-x-0'
					leave='duration-300'
					leaveFrom='ml-0 translate-x-0'
					leaveTo='-ml-[240px] -translate-x-[240px]'
					className='sticky top-0 z-20 h-screen min-w-[240px] border-r bg-white px-8 pb-5 dark:border-gray-400 dark:bg-neutral-900'
				>
					<SidebarInner />
				</Transition>
			)}
		</>
	);
}

const NAV_ITEMS = [
	{
		CategoryName: 'Dashboard',
		subItems: [
			{
				name: 'Default',
				icon: <i className='ph ph-chart-pie-slice text-xl'></i>,
			},
			{
				name: 'eCommerce',
				icon: <i className='ph ph-shopping-bag-open text-xl'></i>,
			},
			{
				name: 'Projects',
				icon: <i className='ph ph-folder-notch text-xl'></i>,
			},
			{
				name: 'Online Courses',
				icon: <i className='ph ph-book-open-text text-xl'></i>,
			},
		],
	},
	{
		CategoryName: 'Pages',
		subItems: [
			{
				name: 'User Profile',
				icon: <i className='ph ph-identification-badge text-xl'></i>,
			},
			{
				name: 'Account',
				icon: <i className='ph ph-identification-card text-xl'></i>,
			},
			{
				name: 'Corporate',
				icon: <i className='ph ph-users-three text-xl'></i>,
			},
			{
				name: 'Blog',
				icon: <i className='ph ph-notebook text-xl'></i>,
			},
			{
				name: 'Social',
				icon: <i className='ph ph-chats-teardrop text-xl'></i>,
			},
		],
	},
];

function SidebarInner() {
	return (
		<>
			<div className='flex h-20 items-center gap-x-2'>
				<div className='h-8 w-8 rounded-full bg-gradient-to-br from-rose-500 via-orange-500 to-yellow-500' />
				<span>Riyadh Baatchia</span>
			</div>
			<ol className='space-y-8'>
				<li className='space-y-2 space-x-5'>
					<span className='text-gray-400'>Favorites</span>
					<span className='text-gray-400'>Recently</span>
					<ol className='space-y-2'>
						<li className='flex cursor-pointer items-center gap-x-3 before:h-2 before:w-2 before:rounded-full before:bg-gray-300'>
							<Link href='/' className='block'>
								Overview
							</Link>
						</li>
						<li className='flex cursor-pointer items-center gap-x-3 before:h-2 before:w-2 before:rounded-full before:bg-gray-300'>
							<Link href='/projects'>Projects</Link>
						</li>
					</ol>
				</li>
				{NAV_ITEMS.map((item, index) => (
					<li key={index} className='space-y-2'>
						<span className='text-gray-400'>{item.CategoryName}</span>
						<ol className='-ml-3 space-y-1'>
							{item.subItems.map((subItems, index) => (
								<li
									key={index}
									className='flex cursor-pointer items-center gap-x-2 rounded-lg px-3 py-1 transition-[background-color] duration-300 hover:bg-gray-100 dark:hover:bg-gray-800'
								>
									<i className='ph ph-caret-right text-xl text-gray-400'></i>
									{subItems.icon}
									<span>{subItems.name}</span>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</>
	);
}
