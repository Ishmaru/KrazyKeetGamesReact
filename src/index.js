import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

fetch('http://localhost:8080/api/game')
.then(function(response) {
  console.log('hid backend')
  return response.json();
})
.then(function(myJson) {
  let gameList = myJson;
  ReactDOM.render(<App games={gameList} showngames={gameList}/>, document.getElementById('root'));
});

