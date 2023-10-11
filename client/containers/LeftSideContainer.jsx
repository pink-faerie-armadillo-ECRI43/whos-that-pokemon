import React, { useState } from 'react';

/*

/////// LEFT SIDE CONTAINER \\\\\\\
Displays high score and current score (which User Input resets to 0 upon failing to name a pokemon).
- for stretch feature: ths would also hold user information (i.e. username)
- Inherits score and pokemon from App

*/

// props coming from play.js
const LeftSideContainer = (props) => {
  const { score, pokemon } = props;
  const [highScore, setHighScore] = useState(0);

  //This condition hides the score if no pokemon has been fetched.
  if (!pokemon.imageURL) {
    return <div id='LeftSideContainer' data-testid='leftContainer'></div>;
  }
  if (score > highScore) {
    setHighScore(score);
  }

  return (
    <div id='LeftSideContainer'>
      <h2 className='score' data-testid='score'>
        Score: {score}
      </h2>
      <h2 className='score' data-testid='highscore'>
        Highscore: {highScore}
      </h2>
    </div>
  );
};

export default LeftSideContainer;
