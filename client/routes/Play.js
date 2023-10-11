import React from 'react';
import MainContainer from '../containers/MainContainer.jsx';
import LeftSideContainer from '../containers/LeftSideContainer.jsx';
import RightSideContainer from '../containers/RightSideContainer.jsx';

// props coming from App.js
const Play = ({
  score,
  setScore,
  hardmode,
  setHardmode,
  pokemon,
  setPokemon,
}) => {
  return (
    <div id='app'>
      <LeftSideContainer score={score} pokemon={pokemon} />
      <MainContainer
        pokemon={pokemon}
        setPokemon={setPokemon}
        score={score}
        setScore={setScore}
        hardmode={hardmode}
        setHardmode={setHardmode}
      />
      <RightSideContainer
        pokemon={pokemon}
        hardmode={hardmode}
        setHardmode={setHardmode}
      />
    </div>
  );
};

export default Play;
