'use strict'

const log = require('util').debuglog('cloudfoundry-actuator-middleware');

const ActuatorHandler = require('cloudfoundry-actuator')
const actuatorHandler = new ActuatorHandler()

module.exports = (options) => {
    return (req, res, next) => {

        try {
            const handled = actuatorHandler.handle(req, res)
            console.log('req was handled by actuator ' + handled)
            if (!handled) {
                next()
            }
        } catch (e) {
            console.log('middleware errr')
            console.log(e)
            next()
        }
    }
}