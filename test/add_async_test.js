const assert = require('assert');
const { addAsync } = require('../add');

describe('Test add async function', () => {
    it('Test with natural numbers', (done) => {
        addAsync(4, 5, total => {
            assert(total === 10);
            done();
        });
    });
});
