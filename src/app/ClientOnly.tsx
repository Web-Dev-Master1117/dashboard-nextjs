'use client';

import { HTMLAttributes, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function ClientOnly({
	children,
	...delegated
}: HTMLAttributes<HTMLDivElement>) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted)
		return (
			<div className='flex h-screen items-center justify-center'>
				<LoadingSpinner />
			</div>
		);

	return <div {...delegated}>{children}</div>;
}
