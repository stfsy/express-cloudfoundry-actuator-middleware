'use strict'

const log = require('util').debuglog('cloudfoundry-actuator-middleware');

const ActuatorHandler = require('cloudfoundry-actuator')
const actuatorHandler = new ActuatorHandler()

module.exports = (options) => {
    return (req, res, next) => {
        let handled = false
        
        try {
            handled = actuatorHandler.handle(req, res)
        } catch (e) {

        }

        if (!handled) {
            next()
        }
    }
}