import React, { useState } from 'react';
import playButton from '../images/playButton.png';

const Pokemon = (props) => {
  const { pokemon, getNewPokemon } = props;

  // when page first loads (pokemon = {}) serve static image as start button
  if (!pokemon.imageURL) {
    return (
      <div id='startScreen'>
        <button onClick={getNewPokemon}>
          <img src={playButton} />
        </button>
      </div>
    );
  }
  return (
    <div id='pokemon'>
      <img src={pokemon.imageURL} />
    </div>
  );
};
export default Pokemon;
