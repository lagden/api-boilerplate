import test from 'ava'
import got from 'got'
import server from './helper/server.js'

test.before(async t => {
	t.context.baseUrl = await server()
})

test('hello', async t => {
	const response = await got.get(`${t.context.baseUrl}/`, {
		throwHttpErrors: false,
		responseType: 'json',
	})

	t.is(response.statusCode, 200)
	t.snapshot(response.body)
})

test('hello boilerplate', async t => {
	const response = await got.get(`${t.context.baseUrl}/boilerplate`, {
		throwHttpErrors: false,
		responseType: 'json',
	})

	t.is(response.statusCode, 200)
	t.snapshot(response.body)
})

test('echo json', async t => {
	const response = await got.post(`${t.context.baseUrl}/echo`, {
		throwHttpErrors: false,
		responseType: 'json',
		json: {xxx: true},
	})

	t.is(response.statusCode, 200)
	t.snapshot(response.body)
})
