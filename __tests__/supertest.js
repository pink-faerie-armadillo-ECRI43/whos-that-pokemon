/**
 * @jest-environment node
 */

const request = require('supertest');
const app = require('../server/server.js');
const { User } = require('../server/models/pokemonModels.js');

it('jest is working', () => {
  expect(1).toBe(1);
});

describe('route integration', () => {
  //maybe this doesnt work bc express cant handle errors and so it just times out
  //   describe('unknown route handler', () => {
  //     describe('GET', () => {
  //       it('responds with 404', async () => {
  //         const response = await request(app).get('/test');
  //         expect(response.status).toBe(404);
  //       });
  //     });
  //   });
  describe('/pokemon', () => {
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
  //   describe('/signup', () => {
  //     describe('POST', () => {
  //       it('responds with a 200 status and json "Added user to the db"', async () => {
  //         const response = await request(app).post('/pokemon/signup', {
  //           username: 'test2',
  //           password: 'test2',
  //         });
  //         expect(response.status).toBe(200);
  //         expect(response.headers['content-type']).toBe(
  //           'application/json; charset=utf-8'
  //         );
  //         expect(response.body).toBe('Added user to the db');
  //       });
  //     });
  //   });
  //   describe('/login', () => {
  //     describe('POST', () => {
  //       it('responds with a 200 status and json "User is logged in"', async () => {
  //         const response = await request(app).post('/pokemon/login', {
  //           username: 'test2',
  //           password: 'test2',
  //         });
  //         expect(response.status).toBe(200);
  //         expect(response.headers['content-type']).toBe(
  //           'application/json; charset=utf-8'
  //         );
  //         expect(response.body).toBe('User is logged in');
  //       });
  //     });
  //   });
});
