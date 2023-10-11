import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Leader from '../components/Leader.jsx';

const Leaderboard = () => {
  const score = useSelector((state) => state.game.score);
  const currentUser = useSelector((state) => state.user);
  const leaders = [];

  //fetch request to get top users (to /pokemon/leaderboard)
  const getLeaderboard = async () => {
    const response = await fetch('/pokemon/leaderboard');
    const leaderList = await response.json();
    console.log('leaderlist', leaderList);
  };

  let DBScore;
  const getDBScore = async () => {
    let response = await fetch(`/pokemon/leaderboard/${currentUser.username}`);
    response = await response.json();
    DBScore = response.highScore;
    updateDBScore();
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

  //use effect to load in leaderboard and user high score, and update user high score
  useEffect(() => {
    getLeaderboard();
    getDBScore();
  }, []);

  //   useEffect(() => {
  //     for (let leader of leaderList) {
  //       leaders.push(
  //         <Leader username={leader.username} highScore={leader.highScore} />
  //       );
  //     }
  //   }, [leaderList]);

  return (
    <div className='main'>
      <div className='user-high-score'>
        <h3>Your High Score</h3>
        <p>{currentUser.highScore}</p>
      </div>
      <div className='leaderboard'>
        <h3>Leaderboard</h3>
        {/* {leaders} */}
      </div>
    </div>
  );
};

export default Leaderboard;
