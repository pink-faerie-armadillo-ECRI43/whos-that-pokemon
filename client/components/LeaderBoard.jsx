import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { updateUser } from '../slices/pokemonSlice.js';

const LeaderBoard = () => {
  const highScores = useSelector((state) => state.pokemon.highScores);
  // const dispatch = useDispatch();
  // let response;
  // dispatch(updateUser(response))

  return <div id='app'>hi</div>;
};
export default LeaderBoard;
