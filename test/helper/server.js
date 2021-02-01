'use strict'

const hexId = require('@tadashi/hex-id')
const request = require('supertest')
const toPort = require('hash-to-port')
const _app = require('../../server/app')

const app = request.agent(_app.listen(toPort(hexId())))

module.exports = app
