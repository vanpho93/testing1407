const assert = require('assert');
const { addPromise } = require('../../add');

xdescribe('Test add promise function', () => {
    it('Test with natural numbers', (done) => {
        addPromise(4, 5)
        .then(total => {
            assert(total === 9);
            done();
        })
    });

    it('Test with wrong input numbers', (done) => {
        addPromise('4', 5)
        .then(total => {
            assert(false);
            done();
        })
        .catch(err => {
            assert(err.message === 'Type error');
            done();
        });
    });

    it('Test with numbers async await', async () => {
        const total = await addPromise(4, 5);
        assert(total === 9);
    });

    it('Test with wrong numbers async await', async () => {
        try {
            const total = await addPromise('4', 5);
        } catch(error) {
            assert(error.message === 'Type error');
        }
    });
});
