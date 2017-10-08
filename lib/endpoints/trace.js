'use strict'

const Endpoint = require('./endpoint')

/**
 * 
 * @extends Endpoint
 */
class TraceEndpoint extends Endpoint {

    constructor() {
        super({
            name: 'trace',
            allowHeaders: ['authorization', 'x-cf-app-instance']
        })
    }

    /**
     * 
     * @param {http.ClientRequest} req 
     * @param {http.ClientResponse} res 
     */
    handle(req, res) {
        super.handle(req, res)
        // TODO
        // no more hard coding
        return [{
            "timestamp": 1394343677415,
            "info": {
                "method": "GET",
                "path": "/trace",
                "headers": {
                    "request": {
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                        "Connection": "keep-alive",
                        "Accept-Encoding": "gzip, deflate",
                        "User-Agent": "Mozilla/5.0 Gecko/Firefox",
                        "Accept-Language": "en-US,en;q=0.5",
                        "Cookie": "_ga=GA1.1.827067509.1390890128; ...",
                        "Authorization": "Basic ...",
                        "Host": "localhost:8080"
                    },
                    "response": {
                        "Strict-Transport-Security": "max-age=31536000 ; includeSubDomains",
                        "X-Application-Context": "application:8080",
                        "Content-Type": "application/json;charset=UTF-8",
                        "status": "200"
                    }
                }
            }
        }]
    }
}

module.exports = TraceEndpoint