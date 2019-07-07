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
  let gameList = myJson;
  console.log(gameList);
  // kkgState.setState({games: myJson});
  ReactDOM.render(<App games={gameList} showngames={gameList}/>, document.getElementById('root'));
});
//jdbc:h2:file:~/krazykeetgames-test
// registerServiceWorker();
