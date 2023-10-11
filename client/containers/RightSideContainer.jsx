import React from 'react';

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

const RightSideContainer = (props) => {
  const { hardmode, setHardmode, pokemon } = props;
  //This functionality changes the state of Hardmode.
  const onChangeValue = () => {
    if (hardmode === false) {
      setHardmode(true);
    } else {
      setHardmode(false);
    }
  };
  // This condition hides the options until a pokemon is fetched.
  if (!pokemon.imageURL) {
    return <div id='RightSideContainer' data-testid='rightContainer'></div>;
  }

  return (
    <div id='RightSideContainer' onChange={onChangeValue}>
      <div id='HardmodeButton'>
        <input type='checkbox' checked={hardmode === true} />
        Hardmode
      </div>
    </div>
  );
};

export default RightSideContainer;
