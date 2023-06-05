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
			grey700: '#6E7A8A',
			grey800: '#404B5A',
			grey900: '#212934'
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out"
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
}
