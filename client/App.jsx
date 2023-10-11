import React, { useState } from 'react'; //no need to use usestate after changing to redux

import MainContainer from './containers/MainContainer.jsx';
import LeftSideContainer from './containers/LeftSideContainer.jsx';
import RightSideContainer from './containers/RightSideContainer.jsx';
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

    <div id='app'>
      <LeftSideContainer />
      <MainContainer />
      <RightSideContainer />
    </div>

  );
};

export default App;
