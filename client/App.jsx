import React, { useState } from 'react';
// import MainContainer from './containers/MainContainer.jsx';
// import LeftSideContainer from './containers/LeftSideContainer.jsx';
// import RightSideContainer from './containers/RightSideContainer.jsx';
import { Route, Routes } from 'react-router';
import Play from './routes/Play.js';
import Login from './routes/Login.js';

const App = () => {
  // initializing states
  const [score, setScore] = useState(0);
  const [hardmode, setHardmode] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  // set up each container and pass appropraite states down props chain
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        }
      />
      <Route
        path='/play'
        element={
          <Play
            score={score}
            setScore={setScore}
            hardmode={hardmode}
            setHardmode={setHardmode}
            pokemon={pokemon}
            setPokemon={setPokemon}
          />
        }
      />
    </Routes>
  );
};

export default App;
