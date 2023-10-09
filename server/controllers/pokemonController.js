const Pokemon = require('../models/pokemonModels');
const fetch = require('node-fetch');

const pokemonController = {};

pokemonController.getPokemon = async (req, res, next) => {
    try {
        const randomPokemon = await Pokemon.aggregate([ { $sample: { size: 1 } } ]);
        const { name, imageURL } = randomPokemon[0];
        res.locals.randomPokemon = {name: name, imageURL: imageURL};
        return next();
    } catch (err) {
        return next({
            log: 'Error occured in pokemonController.getPokemon middleware.',
            status: 500,
            message: 'An error occured fetching a pokemon from the database.'            
        });
    }
}

// This controller is for populating the database

// pokemonController.fetchPokemonData = async (req, res, next) => {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
//     const data = await response.json();
//     // console.log('data: ', data);
//     const pokemonList = data.results;
  
//     const pokemonDataList = [];
  
//     for (const pokemon of pokemonList) {
//       const pokemonDetails = await fetch(pokemon.url).then((res) => res.json());
//       const pokemonData = {
//         name: pokemon.name,
//         imageURL: pokemonDetails.sprites.other['official-artwork'].front_default,
//       };
//       pokemonDataList.push(pokemonData);
//     }
//     return pokemonDataList;
// }

module.exports = pokemonController;