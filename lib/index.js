'use strict'

const log = require('util').debuglog('cloudfoundry-actuator-middleware');

const Actuator = require('node-cloudfoundry-actuator')
const actuator = new Actuator()

module.exports = () => {
    return (req, res, next) => {
        try {
            actuator.handle(req, res, next)
        } catch (e) {
            next()
        }
    }
}