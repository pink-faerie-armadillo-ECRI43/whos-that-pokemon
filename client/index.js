import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from "react-dom"
import App from './App.jsx';

import styles from '../public/styleSheet.css';

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
