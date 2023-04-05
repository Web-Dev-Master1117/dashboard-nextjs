export default function LoadingSpinner() {
	return (
		<div
			className='flex h-14 w-14 animate-spin items-center justify-center rounded-full border-4 border-solid border-orange-400 border-r-transparent'
			role='status'
		/>
	);
}
