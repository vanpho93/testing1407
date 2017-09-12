const assert = require('assert');
const queryDb = require('../db');

describe('Test query db function', () => {
    it('Can querydb with select sql', async () => {
        const result = await queryDb('SELECT * FROM "User"', []);
    });

    it('Cannot querydb with wrong sql', async () => {
        try {
            await queryDb('SELECT  FROM "User"', []);
        } catch(err) {
            assert(true);
        }
    });
});
