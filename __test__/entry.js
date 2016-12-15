var chai = require('chai')

chai.config.truncateThreshold = 0

var context = require.context('.', true, /\.spec\.js$/)
context.keys().forEach(context)
