import pvg from 'pvg'

/** @type {import('vite').UserConfig} */
export default {
	appType: 'mpa',
	clearScreen: false,
	plugins: [
		pvg.match('*/index.pug'),
	],
	build: {
		outDir: '../pub',
		target: 'esnext',
		cssMinify: false,
		emptyOutDir: true,
	},
	esbuild: {
		target: 'esnext'
	}
}
