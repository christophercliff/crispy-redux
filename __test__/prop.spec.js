var prop = require('prop')
var expect = require('chai').expect

describe('prop()', function () {

    it('should get the prop', function () {
        expect(prop({ a: 'A' }, 'a')).to.equal('A')
    })

    it('should throw if invalid path', function () {
        expect(prop.bind(undefined, {}, 'a')).to.throw(TypeError)
    })

})
