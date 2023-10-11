import React, { useState, useEffect } from 'react';

/*

/////// LEFT SIDE CONTAINER \\\\\\\
Displays high score and current score (which User Input resets to 0 upon failing to name a pokemon).
- for stretch feature: ths would also hold user information (i.e. username)
- Inherits score and pokemon from App

*/

// props coming from play.js
const LeftSideContainer = (props) => {
  const { currentUser, score, pokemon } = props;

  useEffect(async () => {
    //if score > currentUser.highScore
    //post request to update user's high score to /pokemon/leaderboard/:name
    if (score > currentUser.highScore) {
      const response = await fetch(
        `/pokemon/leaderboard/${currentUser.username}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: { highScore: score },
        }
      );
    }
  }, [score]);

  //This condition hides the score if no pokemon has been fetched.
  if (!pokemon.imageURL) {
    return <div id='LeftSideContainer' data-testid='leftContainer'></div>;
  }
  return (
    <div id='LeftSideContainer'>
      <h2 className='score' data-testid='score'>
        Score: {score}
      </h2>
      <h2 className='score' data-testid='highscore'>
        Highscore: {currentUser.highScore}
      </h2>
    </div>
  );
};

export default LeftSideContainer;
