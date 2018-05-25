import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Clock from './clock';

document.addEventListener('DOMContentLoaded', () => {
  let groot = document.getElementById('groot');
  ReactDOM.render(<Clock />, groot);
});
