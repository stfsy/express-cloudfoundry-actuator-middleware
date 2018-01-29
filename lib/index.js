'use strict'

const log = require('util').debuglog('cloudfoundry-actuator-middleware');

const Actuator = require('node-cloudfoundry-actuator')
const actuator = new Actuator()

module.exports = (options) => {
    return (req, res, next) => {
        let handled = false
        
        try {
            handled = actuator.handle(req, res)
        } catch (e) {

        }

        if (!handled) {
            next()
        }
    }
}