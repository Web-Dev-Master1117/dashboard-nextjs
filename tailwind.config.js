/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
	],
	theme: { extend: {} },
	plugins: [require('@headlessui/tailwindcss')],
};
