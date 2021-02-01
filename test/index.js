'use strict'

const test = require('ava')
const app = require('./helper/server')

test('hello', async t => {
	const r = await app
		.get('/')

	const {hello} = r.body.data
	t.is(r.status, 200)
	t.is(hello, 'Hello World')
})

test('hello boilerplate', async t => {
	const r = await app
		.get('/boilerplate')

	const {hello} = r.body.data
	t.is(r.status, 200)
	t.is(hello, 'Hello boilerplate')
})

test('echo', async t => {
	const r = await app
		.post('/echo')
		.set('content-type', 'application/json')
		.send({xxx: true})

	t.is(r.status, 200)
	t.true(r.body.xxx)
})
