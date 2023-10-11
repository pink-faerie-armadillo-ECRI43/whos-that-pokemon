import React, { useState } from 'react'; //no need to use usestate after changing to redux
//importing react router stuff
import { Routes, Route } from 'react-router';
import Login from './routes/Login.js';
import Play from './routes/Play.js';

// importing redux related stuff
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';

import { setScore, setHardmode, setPokemon } from './redux/gameSlice';

const App = () => {
  // Define functions to dispatch actions
  const dispatch = useDispatch();

  const handleSetScore = (newScore) => {
    dispatch(setScore(newScore));
  };

  const handleSetHardmode = (isHardmode) => {
    dispatch(setHardmode(isHardmode));
  };

  const handleSetPokemon = (newPokemon) => {
    dispatch(setPokemon(newPokemon));
  };

  // access state property using useSelector
  const score = useSelector((state) => state.game.score);
  const hardmode = useSelector((state) => state.game.hardmode);
  const pokemon = useSelector((state) => state.game.pokemon);

  // pass store down to each container
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        }
      />
      <Route
        path='/play'
        element={
          <Play
            currentUser={currentUser}
            score={score}
            setScore={setScore}
            hardmode={hardmode}
            setHardmode={setHardmode}
            pokemon={pokemon}
            setPokemon={setPokemon}
          />
        }
      />
    </Routes>
  );
};

export default App;
