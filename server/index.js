'use strict'

const la = require('local-access')
const debug = require('./lib/debug')
const app = require('./app')

const {
	PORT = 5000,
	PORT_PUBLISHED = 5000,
	HOSTNAME = '0.0.0.0',
	VERSION = 'dev'
} = process.env

let HOSTNAME_CUSTOM = process.env?.HOSTNAME_CUSTOM ?? HOSTNAME

let {
	local,
	network
} = la({port: PORT_PUBLISHED, hostname: HOSTNAME_CUSTOM})

app.listen(PORT, () => {
	debug.info('Server listening')
	debug.info('----------------')
	debug.info(`Local:    ${local}`)
	debug.info(`Network:  ${network}`)
	debug.info('----------------')
	debug.info(`Version:  ${VERSION}`)
})
