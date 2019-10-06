'use strict'

const Router = require('@koa/router')
const bodyparser = require('koa-bodyparser')
const auth = require('../middleware/auth')
const debug = require('../lib/debug')
const db = require('../lib/db')

const router = new Router()

function user(ctx) {
	try {
		const {id} = ctx.params
		const result = db.find(id)
		ctx.body = {
			data: {result}
		}
	} catch (error) {
		debug.error('salva', error)
		ctx.throw(500, 'Get user fail')
	}
}

function save(ctx) {
	try {
		const {body} = ctx.request
		const result = db.save(body)
		ctx.body = {
			data: {result}
		}
	} catch (error) {
		debug.error('salva', error)
		ctx.throw(500, 'Save user fail')
	}
}

router
	.get('/user', auth, user)
	.get('/user/:id', auth, user)
	.post('/user', bodyparser(), auth, save)

module.exports = router
