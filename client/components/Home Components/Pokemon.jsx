import React, { useState } from 'react';
import playButton from '../../images/playButton.png';
// import music from '../../music/onplaymusic.mp3';
import Timer from './Timer.jsx';

const Pokemon = (props) => {

  const { pokemon, getNewPokemon, hardmode, setHardmode, remainingTime, setRemainingTime, score, setScore } = props;

  // when page first loads (pokemon = {}) serve static image as start button
  if (!pokemon.imageURL) {
    return (
      // renders our playButton from images folder on start screen
      <div id='startScreen'>
        <button id='playButton' onClick={getNewPokemon}>
          <img className='playButton' src={playButton} />
        </button>
      </div>
    );
  }
  // checks if hardmode is false and loads appropriate image
  // autoplay audio upon starting game, was working on adjusting volume, or maybe option for turning it on/off
  if (hardmode === false) {
    return (
      <div id='pokemon'>
        <Timer
          remainingTime={remainingTime}
          setRemainingTime={setRemainingTime}
          getNewPokemon={getNewPokemon}
          setScore={setScore}
        />
        {/* <audio id='audio' src={music} autoPlay></audio> */}
        <img className='pokemon' src={pokemon.imageURL} />
      </div>
    );
  } else {
    return (
      <div id='pokemon'>
        <Timer
          remainingTime={remainingTime}
          setRemainingTime={setRemainingTime}
          getNewPokemon={getNewPokemon}
          setScore={setScore}
        />
        {/* <audio id='audio' src={music} autoPlay></audio> */}
        <img id='pokemonImage' src={pokemon.imageURL} />
      </div>
    );
  }
};
export default Pokemon;
