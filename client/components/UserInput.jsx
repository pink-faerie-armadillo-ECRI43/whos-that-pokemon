import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScore, setPokemon, setRound } from '../redux/gameSlice';
import { setHighScore } from '../redux/userSlice';
import { Navigate } from 'react-router-dom';

const UserInput = () => {
  const dispatch = useDispatch();

  // access state from store
  const score = useSelector((state) => state.game.score);
  const pokemon = useSelector((state) => state.game.pokemon);
  const round = useSelector((state) => state.game.round);
  const highScore = useSelector((state) => state.user.highScore);

  // upon user submission, checks to see if submitted answer is correct
  // if correct it will alert and increment score
  // if incorrect it will alert with correct answer
  // will render new pokemon either way by calling getNewPokemon
  // Function to check the user's answer
  const checkAnswer = async (e) => {
    e.preventDefault();
    const answer = e.target[0].value;
    dispatch(setRound(round + 1));

    if (answer.toLowerCase() === pokemon.name) {
      const newScore = score + 1;
      alert('Correct! Well done!');
      // Increment the score and set it in the store
      dispatch(setScore(newScore));
      if (newScore > highScore) {
        dispatch(setHighScore(newScore));
      }
      e.target.reset();
    } else {
      alert(`Incorrect! The correct answer was ${pokemon.name}.`);
      // Reset the score to 0 and fetch a new Pokemon
      dispatch(setScore(0));
      dispatch(setPokemon({})); // Clear the current Pokemon
      e.target.reset();
    }
  };
  // Only play 5ish rounds
  if (round > 1) {
    return <Navigate replace to='/leaderboard' />;
  }
  // Only display the user submission form if a Pokemon image is on the screen
  if (!pokemon.imageURL) {
    return <div id='startPageNoInput'></div>;
  }

  // Add the form for user submission when a Pokemon image renders
  return (
    <div>
      <form id='UserInput' onSubmit={checkAnswer}>
        <label htmlFor='userAnswer'> </label>
        <input
          id='userInputBox'
          type='text'
          placeholder='Type your answer here'
        />
        <input id='submitButton' type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default UserInput;
