import React, { useState } from 'react';
import MainContainer from './containers/MainContainer.jsx';
// import LeftSideContainer from './containers/LeftSideContainer.jsx'

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div id='app'>
      {/* <div><LeftSideContainer score={score} setScore={setScore}/></div> */}
      <div>
        <MainContainer score={score} setScore={setScore} />
      </div>
    </div>
  );
};
export default App;
