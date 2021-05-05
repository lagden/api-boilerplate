import la from 'local-access'
import app from './app.js'
import * as debug from './lib/debug.js'

const {
	PORT = 5000,
	PORT_PUBLISHED = 5000,
	HOSTNAME = '0.0.0.0',
	VERSION = 'dev'
} = process.env

const HOSTNAME_CUSTOM = process.env?.HOSTNAME_CUSTOM ?? HOSTNAME

const {
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
