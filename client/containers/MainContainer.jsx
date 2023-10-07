import React from 'react';
import Header from '../components/Header.jsx';
import Pokemon from '../components/Pokemon.jsx';
import UserInput from '../components/UserInput.jsx';

const MainContainer = (props) => {
  const { score, setScore } = props;
  //create pokemon state to render new pokemon image and passing down to relevant containers
  const [pokemon, setPokemon] = useState({});

  // function to get a new pokemon image
  const getNewPokemon = async (e) => {
    //this prevents page from refreshing upon clicking "Submit"
    try {
      // make request to server to get a random new pokemon
      let getPokemon = await fetch('/pokemon');
      getPokemon = await getPokemon.json();
      // getPokemon = {name: "Pikachu", image: "URI to image of pikachu"}
      setPokemon(getPokemon);
    } catch (error) {
      // if there is an error rendering new pokemon state, give
      // if (response.status === 500 ) {
      alert('Failed to load pokemon');
    }
  };

  return (
    <div id='MainContainer'>
      <Header />
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
