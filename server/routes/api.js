const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const Pokemon = require('../models/pokemonModels');

const router = express.Router();

router.get('/pokemon', pokemonController.getPokemon, (req, res) => {
    return res.status(200).json(res.locals.randomPokemon);
})

// This router is designed to populate your database.

// router.get('/fetch-and-store-pokemons', async (req, res) => {
//     try {
//       const pokemonDataList = await pokemonController.fetchPokemonData();
//       await Pokemon.create(pokemonDataList);
//       console.log(`Stored ${pokemonDataList.length} Pokémon in the database.`);
//       res.json({ message: `Stored ${pokemonDataList.length} Pokémon in the database.` });
//     } catch (error) {
//       console.error(`Error fetching/storing data for Pokémon: ${error.message}`);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
// });



  module.exports = router;