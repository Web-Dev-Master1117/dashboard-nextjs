import { RecoilProvider } from '@/providers/recoil-provider';
import { NextThemeProvider } from '../providers/theme-provider';
import ClientOnly from './ClientOnly';
import Navbar from './Navbar';
import NotificationBar from './NotificationBar';
import Sidebar from './Sidebar';

import './globals.css';
import './icons.css';

export const metadata = {
	title: 'Dashboard',
	description: 'A Dashboard site using NextJS 13',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			//HACK to stop errors caused by next-themes
			suppressHydrationWarning
		>
			<body className='bg-gray-50 dark:bg-neutral-900'>
				<RecoilProvider>
					<NextThemeProvider>
						<ClientOnly className='flex'>
							<Sidebar />
							<div className='grow'>
								<Navbar />
								{children}
							</div>
							<NotificationBar />
						</ClientOnly>
					</NextThemeProvider>
				</RecoilProvider>
			</body>
		</html>
	);
}
