/**
 * @jest-environment node
 */

const fs = require('fs');
const path = require('path');
const { Pokemon, User } = require('../server/models/pokemonModels');
const mongoose = require('mongoose');

/**
 * @jest-environment node
 */
// my-broken-node-only-test.js

describe('db unit tests', () => {
  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    done();
  });

  it('Find a random Pokemon in database', async () => {
    // const randomNumber = Math.floor(Math.random() * 1017);
    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
    // );
    const response = await Pokemon.findOne({ name: 'bulbasaur' });
    expect(response.name).toEqual('bulbasaur');
  });

  it('Finding user in database', async () => {
    const newUser = { username: 'test', password: 'test' };

    const testUser = await User.findOne({ username: newUser.username });
    expect(testUser).toEqual(testUser);
  });
});
