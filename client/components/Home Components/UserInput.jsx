import React, { useState } from 'react';

const UserInput = (props) => {
  const { score, setScore, getNewPokemon, pokemon, remainingTime, setRemainingTime, CountdownTimer } = props;

  // upon user submission, checks to see if submitted answer is correct
  // if correct it will alert and increment score
  // if incorrect it will alert with correct answer
  // will render new pokemon either way by calling getNewPokemon
  const checkAnswer = async (e) => {
    e.preventDefault();
    const answer = e.target[0].value;

    if (answer.toLowerCase() === pokemon.name) {
      alert('Correct! Well done!');
      setScore(score + 1);
      getNewPokemon();
    
      setRemainingTime(17);
      CountdownTimer();

      e.target.reset();
    } else {
      alert(`Incorrect! The correct answer was ${pokemon.name}. Restart the game?`);
      setScore(0);
      getNewPokemon();
      
      setRemainingTime(17)
      CountdownTimer();

      e.target.reset();
    // } else if (remainingTime === 0) {
    //   alert(`Times up! Restart the game?`);
    //   setScore(0);
    //   getNewPokemon();
      
    //   setRemainingTime(8)
    //   timedOut();
      
      

    //   e.target.reset();
    }
  };

  // only have user submission form display if pokemon image is on screen
  if (!pokemon.imageURL) {
    return <div id='startPageNoInput'></div>;
  }

  // add form for user submission when pokemon image renders
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
