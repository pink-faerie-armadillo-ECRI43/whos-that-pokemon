import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Pokemon from '../components/Pokemon.jsx';
import UserInput from '../components/UserInput.jsx';
// import Bulbasaur from '../images/bulbasaur.png';

/*

/////// MAIN CONTAINER \\\\\\\
Holds Header, Pokemon, and User Input components.
- Inherits score, pokemon, and hardmode state and setter functions from App
- We've commented out a local test image, Bublasaur, that can be used to test the setPokemon function:
  - i.e. setPokemon({ name: 'bulbasaur', image: `${Bulbasaur}` });

*/

const MainContainer = (props) => {
  const { score, setScore, pokemon, setPokemon, hardmode, setHardmode } = props;

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
        pokemon={pokemon}
        getNewPokemon={getNewPokemon}
        hardmode={hardmode}
        setHardmode={setHardmode}
      />
      <UserInput
        score={score}
        setScore={setScore}
        getNewPokemon={getNewPokemon}
        pokemon={pokemon}
      />
    </div>
  );
};
export default MainContainer;
