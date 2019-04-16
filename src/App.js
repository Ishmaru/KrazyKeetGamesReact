import React, { Component } from 'react';
// import logo from './logo.svg';
import gamesList from './games.js';

console.log(gamesList);
class KrazyKeetGames extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      games: gamesList
    }
  }
  render(i){
    return(
      <div className="App">
      <NavBar/>
        <ul>{gameArray}</ul>
      </div>
      );
  }
}

const gameArray = gamesList.map((item, index)=>
  <li className="game_graphic" id={index} key={index}>
    <img src={item.background}></img>
    <div className="text_box">
      <h2>{item.name}</h2>
      <span>{item.version}</span>
      <span>{item.description}</span>
    </div>
  </li>
);

const navArray = gamesList.map((item, index)=>
  <li key={index} onClick={() => navigate(index)}>
    <img src={item.thumb}></img>
  </li>
);

const navigate = function(i){
  console.log(i);
  document.getElementById(i).scrollIntoView();
}

class TitleBanner extends React.Component{
  render(){
    return(
      <div>
        <h1>Krazy Keet Games LLC</h1>
      </div>
    )
  }
}

class NavBar extends React.Component{
  render() {
    return (
      <nav className="container">
        <ul>{navArray}</ul>
      </nav>
    );
  }
}
export default KrazyKeetGames;
