var expect = require('chai').expect
var grab = require('grab')

describe('grab()', function () {

    it('should get the prop', function () {
        expect(grab({ a: 'A' }, 'a')).to.equal('A')
        expect(grab({ a: [{ b: 'B' }] }, ['a', 0, 'b'])).to.equal('B')
    })

    it('should throw if invalid path', function () {
        expect(function () {
            grab({}, 'a')
        }).to.throw(TypeError)
    })

})
