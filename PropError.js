var template = require('lodash/template')
var message = template('Cannot read property \'<%= path %>\' of <%= obj %>\n')

module.exports = PropError

function PropError(obj, path) {
    this.message = message({
        obj: obj,
        path: path,
    })
    this.name = 'PropError'
    this.stack = new Error().stack
}

PropError.prototype = Object.create(TypeError.prototype)
PropError.prototype.constructor = PropError
