import React, { useState } from 'react';
import MainContainer from './Home Components/MainContainer.jsx';
import LeftSideContainer from './Home Components/LeftSideContainer.jsx';
import RightSideContainer from './Home Components/RightSideContainer.jsx';
import NavBar from './NavBar.jsx';

const Home = () => {
  // initializing states
  const [score, setScore] = useState(0);
  const [hardmode, setHardmode] = useState(false);
  const [pokemon, setPokemon] = useState({});

  // set up each container and pass appropraite states down props chain
  return (
    <>
      <NavBar />
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
    </>
  );
};
export default Home;
