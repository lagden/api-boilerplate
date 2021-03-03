'use strict'

const hexId = require('@tadashi/hex-id')
const toPort = require('hash-to-port')
const app = require('../../server/app')

const port = toPort(hexId())

function server(p = port) {
	return new Promise(resolve => {
		app.listen(p, () => {
			resolve(`http://127.0.0.1:${p}`)
		})
	})
}

module.exports = server
