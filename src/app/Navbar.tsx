'use client';

import { notificationBarOpenState, sidebarOpenState } from '@/recoil/atoms';
import { usePathname } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import ThemeButton from './ThemeButton';

export default function Navbar() {
	const pathname = usePathname().replace('/', '');
	const pageName = pathname.trim() === '' ? 'Overview' : pathname;

	const setSideBarOpen = useSetRecoilState(sidebarOpenState);
	const setNotificationBarOpen = useSetRecoilState(notificationBarOpenState);

	const toggleSideBar = () => setSideBarOpen((prev) => !prev);
	const toggleNotificationBar = () => setNotificationBarOpen((prev) => !prev);

	return (
		<nav className='sticky top-0 z-20 flex h-20 grow justify-between self-start border-b bg-white px-8 dark:border-gray-400 dark:bg-neutral-900'>
			<div className='flex items-center gap-x-3'>
				<i
					onClick={toggleSideBar}
					className='ph-duotone ph-sidebar cursor-pointer text-xl'
				></i>
				<i className='ph-duotone ph-star hidden text-xl md:block'></i>
				<span className='text-gray-400'>Dashboard</span>
				<span className='text-gray-400'>/</span>
				<span className='capitalize'>{pageName}</span>
			</div>
			<div className='flex items-center gap-x-3'>
				<div className='relative hidden w-52 max-w-md md:block'>
					<label htmlFor='search' className='sr-only'>
						Search
					</label>
					<div className='rounded-md shadow-sm'>
						<div
							className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'
							aria-hidden='true'
						>
							<i
								className='ph ph-magnifying-glass mr-3 h-4 w-4 text-gray-400'
								aria-hidden='true'
							></i>
						</div>
						<input
							type='text'
							name='search'
							id='search'
							className='block h-8 w-full rounded-lg border pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
							placeholder='Search...'
						/>
					</div>
				</div>

				<ThemeButton />

				<i className='ph-duotone ph-clock-counter-clockwise hidden text-xl md:block'></i>
				<i className='ph-duotone ph-bell hidden text-xl md:block'></i>
				<i
					onClick={toggleNotificationBar}
					className='ph-duotone ph-sidebar -scale-x-100 cursor-pointer text-xl'
				></i>
			</div>
		</nav>
	);
}
