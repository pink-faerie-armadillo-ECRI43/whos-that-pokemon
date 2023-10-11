import React, { useState } from 'react'; //no need to use usestate after changing to redux
//importing react router stuff
import { Routes, Route } from 'react-router';
import Login from './routes/Login.js';
import Play from './routes/Play.js';
import Leaderboard from './routes/Leaderboard.js';

// importing redux related stuff
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';

import { setScore, setHardmode, setPokemon } from './redux/gameSlice';
import { setUser, updateHighScore } from './redux/userSlice';

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

  const handleSetUser = (newUser) => {
    dispatch(setUser(newUser));
  };

  const handleSetHighScore = (newHighScore) => {
    dispatch(setHighScore(newHighScore));
  };

  // access state property using useSelector
  const score = useSelector((state) => state.game.score);
  const hardmode = useSelector((state) => state.game.hardmode);
  const pokemon = useSelector((state) => state.game.pokemon);
  const user = useSelector((state) => state.user);

  // pass store down to each container
  return (
    <Routes>
      <Route
        path='/'
        element={<Login currentUser={user} setCurrentUser={handleSetUser} />}
      />
      <Route
        path='/play'
        element={
          <Play
            currentUser={user}
            setCurrentUser={handleSetUser}
            score={score}
            setScore={handleSetScore}
            hardmode={hardmode}
            setHardmode={handleSetHardmode}
            pokemon={pokemon}
            setPokemon={handleSetPokemon}
            setHighScore={handleSetHighScore}
          />
        }
      />
      <Route path='/leaderboard' element={<Leaderboard currentUser={user} />} />
    </Routes>
  );
};

export default App;
