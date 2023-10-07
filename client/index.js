import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom"
import App from './App.jsx';

import styles from '../public/styleSheet.css';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
