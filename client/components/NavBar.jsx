import Box from '@mui/material/Box';
import ReceiptIcon from '@mui/icons-material/Receipt';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import {
  updateLeaderBoard,
  updateUser,
  resetUser,
} from '../slices/pokemonSlice.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLeaderBoard = (event) => {
    event.preventDefault();

    const leaderBoardRequest = {
      method: 'GET',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
    };

    fetch('/pokemon/leaderBoard', leaderBoardRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log('data from leaderboard fetch', data);
        if ('err' in data || 'error' in data) {
          alert('Unable to get leaderboard, error from server');
          return;
        }
        dispatch(updateLeaderBoard(data));
        navigate('/leaderBoard');
        return;
      })
      .catch((err) => {
        alert('Unable to get leaderBoard');
        console.log(err);
        return;
      });
  };

  const handleLogOut = (event) => {
    event.preventDefault();

    const logOutRequest = {
      method: 'GET',
      credentials: 'same-origin',
      headers: { 'Content-type': 'application/json' },
    };

    fetch('/user/logout', logOutRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log('data from logOut fetch', data);
        if ('err' in data || 'error' in data) {
          alert('You are not signed in!');
          return;
        }
        dispatch(resetUser());
        navigate('/');
        return;
      })
      .catch((err) => {
        alert('Unable to get logOut');
        console.log(err);
        return;
      });
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: '#2c387e' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            sx={{
              mr: 35,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Who's that Pokemon
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={Link}
              to='/home'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              onClick={(event) => handleLeaderBoard(event)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Leaderboard
            </Button>
            <Button
              component={Link}
              to='/signUp'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              SignUp
            </Button>
            <Button
              component={Link}
              to='/'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              LogIn
            </Button>
            <Button
              onClick={(event) => handleLogOut(event)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Sign Out
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
