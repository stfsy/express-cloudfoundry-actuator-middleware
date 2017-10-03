'use strict'

const log = require('util').debuglog('cloudfoundry-actuator-middleware');

const Registry = require('./registry')
const registry = new Registry()

const interceptor = require('./security/cloudfoundry-security-interceptor')

module.exports = (options) => {
    return (req, res, next) => {

        log('request %s withMethod %s', req.path, req.method)

        let endpoint = null

        if (req.path.indexOf('cloudfoundryapplication') > -1) {
            endpoint = registry.getEndpoint(req)
        }

        try {

            if (endpoint) {
                log('request %s withMethod %s handledBy endpoint', req.path, req.method)                
                let result = {}
                if (req.method === 'OPTIONS') {
                    result = endpoint.handle(req, res)
                } else {
                    interceptor.handle(req, res)
                    result = endpoint.handle(req, res)
                }
                log('response ready withHeaders %o', res.header()._headers)

                res.status(200).send(JSON.stringify(result))
            } else {
                log('request %s withMethod %s handledBy none of our endpoints', req.path, req.method)                                
                next()
            }
        } catch (e) {
            log(e)
            next()
        }
    }
}