import React from 'react';
import Header from '../components/Header.jsx';
import Pokemon from '../components/Pokemon.jsx';
import UserInput from '../components/UserInput.jsx';

const MainContainer = (props) => {
  const { score, setScore } = props;
  const [pokemon, setPokemon] = useState({});
  return (
    <div id='MainContainer'>
      <Header />
      <Pokemon pokemon={pokemon} setPokemon={setPokemon} />
      <UserInput score={score} setScore={setScore} setPokemon={setPokemon} />
    </div>
  );
};
export default MainContainer;
