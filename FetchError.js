var Bluebird = require('bluebird')

module.exports = FetchError

function FetchError(response, body) {
    this.body = body
    this.message = 'Status "' + response.statusText + '" at URL "' + response.url + '"'
    this.name = 'FetchError'
    this.response = response
    this.stack = new Error().stack
}

FetchError.prototype = Object.create(Bluebird.OperationalError.prototype)
FetchError.prototype.constructor = FetchError
