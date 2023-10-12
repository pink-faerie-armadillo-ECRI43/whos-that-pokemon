import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../slices/pokemonSlice.js';
import UserInfoInput from './LogIn-SignUp Components/UserInfoInput.jsx';
import NavBar from './NavBar.jsx';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (event, username, password) => {
    event.preventDefault();
    const sendBody = {
      username: username,
      password: password,
    };
    const signUpRequest = {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(sendBody),
    };

    fetch('/user/signUp', signUpRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log('data from sign-up fetch', data);
        if ('err' in data) {
          alert('Unable to sign up, server responded with error!');
          return;
        }
        const { _id, username, userHighScore } = data;
        const updatedUser = { _id, username, userHighScore };
        dispatch(updateUser(updatedUser));
        navigate('/home');
        return;
      })
      .catch((err) => {
        alert('Unable to sign up');
        console.log(err);
        return;
      });
  };

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  return (
    <div>
      <NavBar />
      <UserInfoInput
        username={username}
        password={password}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
      />
      <button onClick={(event) => signUp(event, username, password)}>
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
