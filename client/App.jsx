import React, { useState } from 'react';

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div id='app'>
      <MainContainer score={score} setScore={setScore} />
    </div>
  );
};
export default App;
