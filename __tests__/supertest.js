const request = require('supertest');
const app = require('../server/server.js');

it('jest is working', () => {
  expect(1).toBe(1);
});

describe('route integration', () => {
  describe('/test endpoint', () => {
    describe('GET', () => {
      it('gets the test message', async () => {
        const response = await request(app).get('/test');
        expect(response.body.message).toBe('pass!');
      });
    });
  });
  describe('/pokemon/', () => {
    describe('GET', () => {
      it('responds with a 200 status', () => {
        return request(app).get('/pokemon/').expect(200);
      });
    });
  });
});
