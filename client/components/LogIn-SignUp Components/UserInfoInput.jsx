import React, { useEffect, useState } from 'react';

const UserInfoInput = (props) => {
  const { username, password, handleUsernameChange, handlePasswordChange } =
    props;

  return (
    <>
      <label className='userInput'>
        Username:
        <input
          name='username'
          type='string'
          placeholder='Username'
          value={username}
          onChange={(event) => handleUsernameChange(event)}
        />
      </label>
      <label className='userInput'>
        Password:
        <input
          name='password'
          placeholder='Password'
          value={password}
          onChange={(event) => handlePasswordChange(event)}
        />
      </label>
    </>
  );
};
export default UserInfoInput;
