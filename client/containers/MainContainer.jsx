import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Pokemon from '../components/Pokemon.jsx';
import UserInput from '../components/UserInput.jsx';
import Bulbasaur from '../images/bulbasaur.png';

const MainContainer = (props) => {
  const { score, setScore } = props;
  //create pokemon state to render new pokemon image and passing down to relevant containers
  const [pokemon, setPokemon] = useState({});

  // function to get a new pokemon image
  const getNewPokemon = async () => {
    //this prevents page from refreshing upon clicking "Submit"
    try {
      // make request to server to get a random new pokemon
      // ex. expected result: {name: "Pikachu", image: <URI to image of pikachu>}
      const result = await fetch('/pokemon', {headers: {
        "Content-Type": "application/json"}});
      const getPokemon = await result.json();
  
      setPokemon(getPokemon);
      // test using local image
      // setPokemon({ name: 'bulbasaur', image: `${Bulbasaur}` });
    } catch (error) {
      // if there is an error rendering new pokemon state, give
      alert(error)
      // if (getPokemon.status === 500) {
      //   alert(`Failed to load pokemon. Error: ${getPokemon.error}`);
      // }
    }
  };

  return (
    <div id='MainContainer'>
      {/* <Header /> */}
      <Pokemon pokemon={pokemon} getNewPokemon={getNewPokemon} />
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
