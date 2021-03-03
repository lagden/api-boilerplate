'use strict'

const test = require('ava')
const got = require('got')
const server = require('./helper/server')

test.before(async t => {
	t.context.baseUrl = await server()
})

test('hello', async t => {
	const response = await got.get(`${t.context.baseUrl}/`, {
		throwHttpErrors: false,
		responseType: 'json'
	})

	const {hello} = response.body.data
	t.is(response.statusCode, 200)
	t.is(hello, 'Hello World')
})

test('hello boilerplate', async t => {
	const r = await got.get(`${t.context.baseUrl}/boilerplate`, {
		throwHttpErrors: false,
		responseType: 'json'
	})

	const {hello} = r.body.data
	t.is(r.statusCode, 200)
	t.is(hello, 'Hello boilerplate')
})

test('echo', async t => {
	const r = await got.post(`${t.context.baseUrl}/echo`, {
		throwHttpErrors: false,
		responseType: 'json',
		json: {xxx: true}
	})

	t.is(r.statusCode, 200)
	t.true(r.body.xxx)
})
