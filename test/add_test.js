const add = require('../add');

describe('Test add function', () => {
    it('Test with natural numbers', () => {
        if(add(5, 5) !== 10) throw new Error('Add failed');
    });

    it('Test with decimal numbers', () => {
        if(add(5.1, 5.2) !== 10.3) throw new Error('Add failed');
    });
});
