import React, { useEffect } from 'react';

const Leaderboard = ({ currentUser }) => {
  const score = useSelector((state) => state.game.score);

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

  //use effect to load in user high score
  useEffect(() => {
    //if score > currentUser.highScore
    //post request to update user's high score (to /pokemon/leaderboard/:username)
    const updateDBScore = async () => {
      if (score > currentUser.highScore) {
        console.log('score', score);
        const body = JSON.stringify({ highScore: score });
        console.log('body', body);
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
