const assert = require('assert');
const request = require('supertest');
const queryDb = require('../db');

const app = require('../app');

describe('Test sign up', () => {
    beforeEach(async () => {
        const sql = 'DELETE FROM "User" WHERE email = $1';
        const result = await queryDb(sql, ['ppp']);
    });

    it('Can sign up with info', async () => {
        const body = { email: 'ppp', name: 'aaa', password: 'x123', phone: '1234' };
        const res = await request(app)
        .post('/signup')
        .send(body);
        assert(res.text === 'Thanh cong');
        assert(res.status === 201);
    });
});
