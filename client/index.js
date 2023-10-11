import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

// import ReactDOM from "react-dom"
import App from './App.jsx';
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx';
import LeaderBoard from './components/Leaderboard Components/LeaderBoard.jsx';

import styles from '../public/styleSheet.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
  {
    path: '/leaderBoard',
    element: <LeaderBoard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);