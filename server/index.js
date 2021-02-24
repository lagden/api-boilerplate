'use strict'

const la = require('local-access')
const debug = require('./lib/debug')
const app = require('./app')

const {
	PORT = 5000,
	PORT_PUBLISHED = 5000,
	HOST = '0.0.0.0',
	VERSION = 'dev'
} = process.env

let {
	local,
	network
} = la({PORT_PUBLISHED, HOST})

app.listen(PORT, () => {
	debug.info('Server listening')
	debug.info('----------------')
	debug.info(`Local:    ${local}`)
	debug.info(`Network:  ${network}`)
	debug.info(`Version:  ${VERSION}`)
})
