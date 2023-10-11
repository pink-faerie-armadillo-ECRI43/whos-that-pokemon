import React from 'react';
import { useSelector } from 'react-redux';
import { setScore } from '../redux/gameSlice';

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
  const score = useSelector((state) => state.game.score);
  const pokemon = useSelector((state) => state.game.pokemon);

  //This condition hides the score if no pokemon has been fetched.
  if (!pokemon.imageURL) {
    return <div id='LeftSideContainer' data-testid='leftContainer'></div>;
  }
  if (score > pokemon.highScore) {
    dispatch(setScore(score));
  }

  return (
    <div id='LeftSideContainer'>
      <h2 className='score' data-testid='score'>
        Score: {score}
      </h2>
      <h2 className='score' data-testid='highscore'>
        Highscore: {pokemon.highScore}
      </h2>
    </div>
  );
};

export default LeftSideContainer;
