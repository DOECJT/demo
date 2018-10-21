const add = require('../add.js');
const assert = require('power-assert');

describe('test/add.test.js', () => {
    it('power-assert', () => {
        assert(add(1, 2) === 3);
    });
});