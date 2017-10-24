var Bluebird = require('bluebird')
var FetchError = require('./FetchError')

module.exports = getFetch

function getFetch(f) {
    return function (url, options) {
        return Bluebird.resolve(f(url, options))
            .then(function (response) {
                return response.json().then(function (body) {
                    return [response, body]
                })
            })
            .spread(verify)
    }
}

function verify(response, body) {
    if (response.status >= 200 && response.status < 300) return body
    throw new FetchError(response, body)
}
