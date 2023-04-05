'use client';

import { notificationBarOpenState } from '@/recoil/atoms';
import { classNames } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function NotificationBar() {
	const [notificationBarOpen, setNotificationBarOpen] = useRecoilState(
		notificationBarOpenState
	);

	const lgMediaQuery = window.matchMedia('(min-width: 1280px)');
	const [isLg, setIsLg] = useState(lgMediaQuery.matches);

	lgMediaQuery.onchange = (event) => {
		setNotificationBarOpen(false);
		setIsLg(event.matches);
	};

	useEffect(() => {
		if (!isLg) setNotificationBarOpen(false);
	}, [isLg, setNotificationBarOpen]);

	return (
		<>
			<Transition show={!isLg && notificationBarOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-40'
					onClose={() => setNotificationBarOpen(false)}
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
						enterFrom='translate-x-[320px]'
						enterTo='translate-x-0'
						leave='duration-300'
						leaveFrom='translate-x-0'
						leaveTo='translate-x-[320px]'
					>
						<Dialog.Panel
							as='nav'
							className='fixed right-0 top-0 z-30 h-screen min-w-[320px] space-y-5 overflow-y-auto overflow-x-hidden border-l bg-white px-8 pt-6 pb-5 dark:border-gray-400 dark:bg-neutral-900'
						>
							<NotificationBarInner />
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>

			<Transition show={isLg && notificationBarOpen}>
				<Transition.Child
					as='nav'
					enter='duration-300'
					enterFrom='translate-x-[320px]'
					enterTo='ml-0 translate-x-0'
					leave='duration-300'
					leaveFrom='ml-0 translate-x-0'
					leaveTo='translate-x-[320px]'
					className='fixed right-0 top-0 z-20 h-screen min-w-[320px] space-y-5 overflow-y-auto overflow-x-hidden border-l bg-white px-8 pt-6 pb-5 dark:border-gray-400 dark:bg-neutral-900'
				>
					<NotificationBarInner />
				</Transition.Child>
				<Transition.Child
					as='div'
					enter='duration-300'
					enterFrom='w-0'
					enterTo='w-[320px]'
					leave='duration-300'
					leaveFrom='w-[320px]'
					leaveTo='w-0'
					className='w-[320px]'
				/>
			</Transition>
		</>
	);
}

function NotificationBarInner() {
	return (
		<>
			<div className='space-y-3'>
				<h1 className='font-semibold'>Notification</h1>
				<ul className='-ml-3 space-y-1'>
					{NOTIFICATION_BAR.map((item, index) => (
						<li
							key={index}
							className='flex cursor-pointer space-x-3 rounded-lg px-3 pt-2 pb-1 transition-[background-color] duration-300 hover:bg-gray-100 dark:hover:bg-gray-800'
						>
							<span
								className={classNames(
									index % 2 ? 'bg-sky-100' : 'bg-rose-100',
									'flex h-7 w-7 items-center justify-center rounded-md text-xl font-semibold text-black'
								)}
							>
								{item.icon}
							</span>
							<span>
								<h3 className='text w-48 truncate leading-snug'>
									{item.message}
								</h3>
								<span className='text-sm text-gray-400'>{item.time}</span>
							</span>
						</li>
					))}
				</ul>
			</div>

			<div className='space-y-3'>
				<h1 className='font-semibold'>Activities</h1>
				<ul className='space-y-3'>
					{NOTIFICATION_BAR_ACTIVITIES.map((activity, index) => (
						<li key={index} className='flex cursor-pointer space-x-3'>
							<div
								className={classNames(
									index === NOTIFICATION_BAR_ACTIVITIES.length - 1
										? ''
										: 'after:absolute after:right-1/2 after:-bottom-6 after:h-5 after:translate-x-1/2 after:rounded after:border',
									'relative h-7 w-7'
								)}
							>
								<Image
									height={28}
									width={28}
									src={activity.imageSrc}
									alt='Avatar'
									className='rounded-full'
								/>
							</div>
							<span>
								<h3 className='text w-48 truncate leading-snug'>
									{activity.message}
								</h3>
								<span className='text-sm text-gray-400'>{activity.time}</span>
							</span>
						</li>
					))}
				</ul>
			</div>

			<div className='space-y-3'>
				<h1 className='font-semibold'>Contacts</h1>
				<ul className='-ml-3 space-y-1'>
					{NOTIFICATION_BAR_CONTACTS.map((contact, index) => (
						<li
							key={index}
							className='flex cursor-pointer items-center gap-x-2 rounded-lg px-3 py-2 transition-[background-color] duration-300 hover:bg-gray-100 dark:hover:bg-gray-800'
						>
							<Image
								height={30}
								width={30}
								src={contact.imageSrc}
								alt='Avatar'
								className='rounded-full'
							/>
							<span>{contact.name}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

const NOTIFICATION_BAR = [
	{
		message: 'A bug message placeholder',
		time: '10 hours ago',
		icon: <i className='ph ph-bug-beetle'></i>,
	},
	{
		message: 'New user registered',
		time: '18 hours ago',
		icon: <i className='ph ph-user'></i>,
	},
	{
		message: 'A bug message placeholder',
		time: '2 days ago',
		icon: <i className='ph ph-bug-beetle'></i>,
	},
	{
		//cspell:disable
		message: 'Viola Amherd subscribed to you',
		//cspell:enable
		time: '2 weeks ago',
		icon: <i className='ph ph-broadcast'></i>,
	},
];
const NOTIFICATION_BAR_ACTIVITIES = [
	{
		message: 'An activity message placeholder',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/12.jpg',
		time: '10 hours ago',
	},
	{
		message: 'An activity message placeholder',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/13.jpg',
		time: '3 days ago',
	},
	{
		message: 'An activity message placeholder',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/14.jpg',
		time: '1 week ago',
	},
	{
		message: 'An activity message placeholder',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/15.jpg',
		time: '2 months ago',
	},
];
const NOTIFICATION_BAR_CONTACTS = [
	//cspell:disable
	{
		name: 'Viola Amherd',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/16.jpg',
	},
	{
		name: 'Simonetta Sommaruga',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/17.jpg',
	},
	{
		name: 'Alain Berset',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/18.jpg',
	},
	{
		name: 'Ignazio Cassis',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/19.jpg',
	},
	{
		name: 'Ueli Maurer',
		imageSrc: 'https://xsgames.co/randomusers/assets/avatars/female/20.jpg',
	},
	//cspell:enable
];
