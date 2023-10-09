import React, { useState } from 'react';

const UserInput = (props) => {
  const { score, setScore, getNewPokemon, pokemon } = props;

  const checkAnswer = async (e) => {
    e.preventDefault();
    const answer = e.target[0].value;

    if (answer.toLowerCase() === pokemon.name) {
      alert('Correct!');
      setScore(score + 1);
      getNewPokemon();
      e.target.reset();
    } else {
      alert('Incorrect!');
      getNewPokemon();
      e.target.reset();
    }
  };

  if (!pokemon.imageURL) {
    return <div id='startPageNoInput'></div>;
  }

  return (
      <div id='UserInput'>
        <form onSubmit={checkAnswer}>
          <label htmlFor='userAnswer'> </label>
          <input type='text' placeholder='Type your answer here' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  
};

export default UserInput;
