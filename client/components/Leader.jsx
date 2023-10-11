import React, { useState } from 'react';

const Leader = ({ username, highScore }) => {
  return (
    <div className='leader'>
      <p>{username}</p>
      <p>{highScore}</p>
    </div>
  );
};

export default Leader;
