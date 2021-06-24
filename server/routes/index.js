import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {readdirSync} from 'node:fs'
import compose from 'koa-compose'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const pattern = /^_[\w-_]+\.js/
const files = readdirSync(__dirname).filter(f => pattern.test(f)).map(f => path.join(__dirname, f))

const middleware = []

const imports = []
for (const file of files) {
	imports.push(import(file))
}

for await (const {default: mod} of imports) {
	middleware.push(
		mod.routes(),
		mod.allowedMethods({throw: true}),
	)
}

export default compose(middleware)
