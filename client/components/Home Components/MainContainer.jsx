import React, { useState } from 'react';
import Header from './Header.jsx';
import Pokemon from './Pokemon.jsx';
import UserInput from './UserInput.jsx';
// import Bulbasaur from '../images/bulbasaur.png';

/*

/////// MAIN CONTAINER \\\\\\\
Holds Header, Pokemon, and User Input components.
- Inherits score, pokemon, and hardmode state and setter functions from App
- We've commented out a local test image, Bublasaur, that can be used to test the setPokemon function:
  - i.e. setPokemon({ name: 'bulbasaur', image: `${Bulbasaur}` });

*/

const MainContainer = (props) => {
  const { score, setScore, pokemon, setPokemon, hardmode, setHardmode, remainingTime, setRemainingTime } = props;
  console.log(pokemon.name)

  // Fetch new pokemon from the database:
  const getNewPokemon = async () => {
    // Makes fetch request to server to get a random new pokemon
    // expected result: {name: <pokemon name>, image: <image URI>}
    // result is converted to JSON and then passed through the setter function
    //  - this updates pokemon state with newly-fetched pokemon
    try {
      const result = await fetch('/pokemon', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const getPokemon = await result.json();

      setPokemon(getPokemon);
    } catch (error) {
      alert(`${error}: failed to load Pokemon`);
    }
  };


  return (
    <div id='MainContainer'>
      <Header />
      <Pokemon
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        score={score}
        setScore={setScore}
        pokemon={pokemon}
        getNewPokemon={getNewPokemon}
        hardmode={hardmode}
        setHardmode={setHardmode}
      />
      <UserInput
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        score={score}
        setScore={setScore}
        getNewPokemon={getNewPokemon}
        pokemon={pokemon}
      />
    </div>
  );
};
export default MainContainer;
