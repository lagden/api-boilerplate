import bodyparser from 'koa-bodyparser'
import Router from '@koa/router'
import * as debug from '../lib/debug.js'

const router = new Router()

// GET
function hello(ctx) {
	const {
		name = 'World',
	} = ctx.params

	// Debug de exemplo
	debug.log('hello | name', name)

	ctx.body = {
		data: {
			hello: `Hello ${name}`,
		},
	}
}

// POST
function echo(ctx) {
	const {
		body,
	} = ctx.request

	// echo do post
	ctx.body = body
}

router
	.get(['/', '/:name'], hello)
	.post('/echo', bodyparser(), echo)

export default router
