import React from 'react';

const UserScores = ({ username, score }) => {
    // render logic for each user score
    return (
        <div className='user-score-box'>
            {username} {score}
        </div>
    );
};

export default UserScores;
