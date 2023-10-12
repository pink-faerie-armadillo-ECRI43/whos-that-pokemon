import React from 'react';

const UserScores = ({ number, username, score }) => {
    // render logic for each user score
    return (
        <div className='user-score-box'>
          <div id="score-user-name">
            <strong>{number}{' - '}{username}</strong>
          </div>
          <div id="score-score">
            <strong>{score}</strong>
          </div>
        </div>
    );
};

export default UserScores;
