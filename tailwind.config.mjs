/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"my-gray": "#bfbfbf",
				"my-gray-white": "#efefef",
				"my-grayish-violet": "#9e9aa7",
				"my-very-dark-blue": "#35323e",
				"my-very-dark-violet": "#232127",
				"my-cyan": "#2acfcf",
				"my-cyan-white": "#46E9E9",
				"my-dark-violet": "#3b3054",
				"my-red": "#f46262",
			}
		},
	},
	plugins: [],
}
