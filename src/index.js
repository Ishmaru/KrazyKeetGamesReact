import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
// import './app.css';
// import registerServiceWorker from './registerServiceWorker';

// let kkgState = this;
let gameList = [];
fetch('http://localhost:8080/api/game')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  gameList = myJson;
  // kkgState.setState({games: myJson});
  ReactDOM.render(<App games={gameList} showngames={gameList}/>, document.getElementById('root'));
});

// registerServiceWorker();
