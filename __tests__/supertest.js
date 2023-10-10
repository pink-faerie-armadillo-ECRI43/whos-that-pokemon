const request = require('supertest');
const app = require('../server/server.js');

it('jest is working', () => {
  expect(1).toBe(1);
});

describe('route integration', () => {
  //error: app.close is not a fn?
  //   afterAll(async () => {
  //     app.close();
  //   });
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
      it('responds with a 200 status and content type json', async () => {
        const response = await request(app).get('/pokemon/');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe(
          'application/json; charset=utf-8'
        );
      });
      it('responds with pokemon name and imageURL as strings', async () => {
        const response = await request(app).get('/pokemon/');
        expect(response.body.name).toBeDefined();
        expect(typeof response.body.name).toBe('string');
        expect(response.body.imageURL).toBeDefined();
        expect(typeof response.body.imageURL).toBe('string');
      });
    });
  });
});
