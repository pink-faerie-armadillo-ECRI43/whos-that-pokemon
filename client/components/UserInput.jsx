import React, { useState } from 'react';

const UserInput = (props) => {
  const { score, setScore, getNewPokemon, pokemon } = props;

  const checkAnswer = async (e) => {};

  if (!pokemon) 
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
