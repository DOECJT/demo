const should = require('should');
const assert = require('power-assert');

describe('test/add.test.js', () => {
    const arr = [1, 2, 3];

    it('should.js', () => {
        arr[0].should.eql(1);
    })

    it('power-assert', () => {
        assert(arr[0] === 1);
    })
})