import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <div id='app'>
      hi
      <button onClick={() => navigate('/leaderBoard')}>leaderBoard</button>
    </div>
  );
};
export default LogIn;
