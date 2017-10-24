var get = require('lodash/get')
var has = require('lodash/has')

module.exports = grab

function grab(obj, path) {
    if (!has(obj, path)) throw new TypeError('Unable to access nonexistent property at path "' + path + '"')
    return get(obj, path)
}
