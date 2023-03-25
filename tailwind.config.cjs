/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {},
		colors: {
			primary: '#0BB1CB',
			white: '#ffffff',
			black: '#212934',
			grey200: '#E1E7EC',
			grey700: '#606062',
			grey800: '#404B5A',
			grey900: '#212934'
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
