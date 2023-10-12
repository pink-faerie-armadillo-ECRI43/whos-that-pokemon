import React from 'react';

const UserScores = ({ number, username, score }) => {
  // render logic for each user score
  let name = username;
  if (username && username !== 'Username') {
    name = name.toUpperCase();
  }
  return (
    <div className='user-score-box'>
      <div id='rank'>
        <strong>{number}</strong>
      </div>
      <div id='score-user-name'>
        <strong>{name}</strong>
      </div>
      <div id='score-score'>
        <strong>{score}</strong>
      </div>
    </div>
  );
};

export default UserScores;
