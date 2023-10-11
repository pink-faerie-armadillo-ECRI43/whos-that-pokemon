import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHardmode } from '../redux/gameSlice';
/*

/////// RIGHT SIDE CONTAINER \\\\\\\
Holds our Game Options:
- Inherits pokemon and hardmode state and setter functions from App
- This space was mostly reserved for our stretch features:
  - Timer
  - Filters for which type of pokemon get generated:
    - by generation (e.g. numbers 1-150)
    - by type (e.g. Fire)
  - Ad space

*/

const RightSideContainer = () => {
  const dispatch = useDispatch();

  // access state from store
  const hardmode = useSelector((state) => state.game.hardmode);
  const pokemon = useSelector((state) => state.game.pokemon);

  //This functionality changes the state of Hardmode.
  const toggleHardmode = () => {
    // Dispatch the setHardmode action to update store
    dispatch(setHardmode(!hardmode));
  };

  // This condition hides the options until a pokemon is fetched.
  // if (!pokemon.imageURL) {
  //   return <div id='RightSideContainer' data-testid='rightContainer'></div>;
  // }

  return (
    <div id='RightSideContainer' onChange={toggleHardmode}>
      <div id='HardmodeButton'>
        <input
          type='checkbox'
          checked={hardmode === true}
          onChange={toggleHardmode}
        />
        Hardmode
      </div>
    </div>
  );
};

export default RightSideContainer;
