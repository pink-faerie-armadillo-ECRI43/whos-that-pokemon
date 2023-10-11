import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const score = useSelector((state) => state.game.score);
  const currentUser = useSelector((state) => state.user);

  //fetch request to get top users (to /pokemon/leaderboard)
  const getLeaderboard = async () => {
    const response = await fetch('/pokemon/leaderboard');
    const userList = await response.json();
    console.log('userlist', userList);
  };

  let DBScore;
  const getDBScore = async () => {
    let response = await fetch(`/pokemon/leaderboard/${currentUser.username}`);
    response = await response.json();
    console.log('GET response', response);
    DBScore = response.highScore;
    console.log('db score', DBScore, 'score', score);
  };
  const updateDBScore = async () => {
    //if score > currentUser.highScore
    //post request to update user's high score (to /pokemon/leaderboard/:username)
    if (score > DBScore) {
      console.log('in if condition');
      const body = JSON.stringify({ highScore: score });
      const response = await fetch(
        `/pokemon/leaderboard/${currentUser.username}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body,
        }
      );
      console.log('update response', response);
    }
  };

  //use effect to load in leaderboard and user high score, and update user high score
  useEffect(() => {
    getLeaderboard();
    getDBScore();
    updateDBScore();
  }, []);

  return (
    <div className='main'>
      <div className='user-high-score'>
        <h3>Your High Score</h3>
        <p>{currentUser.highScore}</p>
      </div>
      <div className='leaderboard'>
        <h3>Leaderboard</h3>
      </div>
    </div>
  );
};

export default Leaderboard;
