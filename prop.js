var get = require('lodash/get')
var has = require('lodash/has')

module.exports = prop

function prop(obj, path) {
    return has(obj, path) ? get(obj, path) : undefined[path]
}
