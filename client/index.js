import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from "react-dom"
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import styles from '../public/styleSheet.css';

const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
