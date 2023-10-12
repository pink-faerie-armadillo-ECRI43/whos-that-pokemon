import React, { useEffect, useState } from 'react';

const CountdownTimer = (props) => {
  const { remainingTime, setRemainingTime, setScore, getNewPokemon } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        clearInterval(interval);
        setRemainingTime(remainingTime - 1);
      } else {
        alert('Times up! Restart the game?');
        setScore(0);
        getNewPokemon();
        clearInterval(interval);
        setRemainingTime(15);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <div className='timer'>
      <span>{remainingTime} </span>
      <span>SECONDS</span>
    </div>
  );
};

export default CountdownTimer;
