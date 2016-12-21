var get = require('lodash/get')
var has = require('lodash/has')
var PropError = require('PropError')

module.exports = prop

function prop(obj, path) {
    if (!has(obj, path)) throw new PropError(obj, path)
    return get(obj, path)
}
