import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setScore } from '../redux/gameSlice';
import { setUser, setHighScore } from '../redux/userSlice';

/*

/////// LEFT SIDE CONTAINER \\\\\\\
Displays high score and current score (which User Input resets to 0 upon failing to name a pokemon).
- for stretch feature: ths would also hold user information (i.e. username)
- Inherits score and pokemon from App

*/

// props coming from play.js
const LeftSideContainer = () => {
  const score = useSelector((state) => state.game.score);
  const pokemon = useSelector((state) => state.game.pokemon);
  const highScore = useSelector((state) => state.user.highScore);

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
        Highscore: {highScore}
      </h2>
    </div>
  );
};

export default LeftSideContainer;
