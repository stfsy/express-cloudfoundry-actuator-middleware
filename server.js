'use strict'

const express = require('express')
const app = express()

const Actuator = require('node-cloudfoundry-actuator')
const actuator = new Actuator()

app.use((req, res, next) => {
    console.log('Incoming req for ', req.url, req.method)
    next()
})

app.use(require('./lib/index')())

app.all('/', (req, res) => {
    console.log('responding to /')
    res.send(200)
})

module.exports = app.listen(process.env.PORT, () => {
    console.log('Hello!')
    console.log('Running!')
})