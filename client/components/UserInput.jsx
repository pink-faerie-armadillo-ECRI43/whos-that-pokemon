import React, { useState } from 'react';

const UserInput = (props) => {
  const { score, setScore, getNewPokemon } = props;

  const checkAnswer;

  return (
    <div id='UserInput'>
      <form onSubmit={getNewPokemon}>
        <label htmlFor='userAnswer'> </label>
        <input type='text' placeholder='Type your answer here' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default UserInput;
