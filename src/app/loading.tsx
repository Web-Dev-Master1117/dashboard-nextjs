import LoadingSpinner from './LoadingSpinner';

export default function Loading() {
	return (
		<div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
			<LoadingSpinner />
		</div>
	);
}
