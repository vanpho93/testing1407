const assert = require('assert');
const User = require('../User');
const queryDb = require('../db');

describe('Test sign un method', () => {
    beforeEach(async () => {
        const sql = 'DELETE FROM "User" WHERE email = $1';
        const result = await queryDb(sql, ['vanpho1@gmail.com']);
    });

    it('Can sign up with info', async () => {
        await User.signUp('vanpho1@gmail.com', '123', 'Pho', '0182938');
        const sql = 'SELECT * FROM "User" WHERE email = $1';
        const result = await queryDb(sql, ['vanpho1@gmail.com']);
        const { email } = result.rows[0];
        assert(email === 'vanpho1@gmail.com');
    });

    it('Cannot sign up with email info', async () => {
        await User.signUp('vanpho1@gmail.com', '123', 'Pho', '0182938');
        try {
            await User.signUp('vanpho1@gmail.com', '123', 'Pho', '0182938');
            assert(false);
        } catch(err) {
            assert(true);
        }
    });
});
