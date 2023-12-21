import { defineConfig } from 'vite'
import pug from './pug.config'

export default defineConfig({
	appType: 'mpa',
	plugins: [
		pug.plugin({ pretty: true })
	],
	build: {
		outDir: '../pub',
		emptyOutDir: true,
		rollupOptions: {
			input: pug.entries('*/index.pug'),
		}
	}
})