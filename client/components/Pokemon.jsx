import React from 'react';
import playButton from '../images/playButton.png';
import music from '../music/onplaymusic.mp3';

import { useSelector, useDispatch } from 'react-redux';
import { setPokemon } from '../redux/gameSlice';

const Pokemon = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.game.pokemon);
  const hardmode = useSelector((state) => state.game.hardmode);

  // Function to start a new game by fetching a new Pokemon
  const startNewGame = async () => {
    try {
      const result = await fetch('/pokemon', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newPokemon = await result.json();

      // Dispatch the setPokemon action to update the store
      dispatch(setPokemon(newPokemon));
    } catch (error) {
      alert(`${error}: failed to start a new game`);
    }
  };

  // when page first loads (pokemon = {}) serve static image as start button
  if (!pokemon.imageURL) {
    return (
      <div id='startScreen'>
        <button id='playButton' onClick={startNewGame}>
          <img src={playButton} />
        </button>
      </div>
    );
  }

  // Check if hard mode is false and load the appropriate image
  if (hardmode === false) {
    return (
      <div id='pokemon'>
        <img src={pokemon.imageURL} />
      </div>
    );
  } else {
    return (
      <div id='pokemon'>
        <audio id='audio' src={music} autoPlay></audio>
        <img id='pokemonImage' src={pokemon.imageURL} />
      </div>
    );
  }
};
export default Pokemon;
