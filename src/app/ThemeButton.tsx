'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeButton() {
	const { setTheme, theme } = useTheme();
	const [themeIcon, setThemeIcon] = useState<
		'ph-sun' | 'ph-moon' | 'ph-desktop'
	>('ph-desktop');

	useEffect(() => {
		switch (theme) {
			case 'light':
				setThemeIcon('ph-sun');
				break;
			case 'dark':
				setThemeIcon('ph-moon');
				break;
			default:
				setThemeIcon('ph-desktop');
				break;
		}
	}, [setTheme, theme]);

	return (
		<i
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={`ph-duotone ${themeIcon} cursor-pointer text-xl`}
		></i>
	);
}
