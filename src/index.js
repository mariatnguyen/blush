import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';
import Header from "./Header.js";
import App from './App.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <Sidebar />
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);