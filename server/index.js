'use strict'

const debug = require('./lib/debug')
const app = require('./app')

const {
	PORT = 5000,
	PORT_PUBLISHED = 5000,
	VERSION = 'dev'
} = process.env

app.listen(PORT, () => {
	debug.info('Server listening')
	debug.info('----------------')
	debug.info(`Local:    http://[::1]:${PORT}`)
	debug.info(`External: http://[::]:${PORT_PUBLISHED}`)
	debug.info(`Version:  ${VERSION}`)
})
