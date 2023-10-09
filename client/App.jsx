import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import LeftSideContainer from './containers/LeftSideContainer.jsx';
import RightSideContainer from './containers/RightSideContainer.jsx';

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div id='app'>
      <LeftSideContainer />
      <MainContainer score={score} setScore={setScore} />
      <RightSideContainer />
    </div>
  );
};
export default App;
