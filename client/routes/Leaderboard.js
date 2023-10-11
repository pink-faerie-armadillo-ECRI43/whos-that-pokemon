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
  //use effect to load in leaderboard
  useEffect(() => {
    getLeaderboard();
  }, []);
  let DBScore;
  const getDBScore = async () => {
    const response = await fetch(
      `/pokemon/leaderboard/${currentUser.username}`
    );
    DBScore = response.json();
  };
  const updateDBScore = async () => {
    //if score > currentUser.highScore
    //post request to update user's high score (to /pokemon/leaderboard/:username)
    if (score > DBScore) {
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
    }
  };
  //use effect to load in user high score
  useEffect(() => {
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
