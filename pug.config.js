import pug from "@vituum/vite-plugin-pug"

import path from 'node:path'
import glob from 'glob'

const find = pattern =>
	glob.sync(path.resolve(__dirname, pattern))

export default {
	plugin: options => pug({ options }),
	entries: pattern => find(pattern).map(match => match + '.html')
}