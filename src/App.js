import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <ul>{gameArray}</ul>
      </div>
      );
  }
}

const gameArray = gamesList.map((item, index)=>
  <li key={index}>
    <img src={item.background}></img>
    <h2>{item.name}</h2>
    <span>{item.version}</span>
    <span>{item.description}</span>
  </li>
);

class TitleBanner extends React.Component{
  render(){
    return(
      <div>
        <h1>Krazy Keet Games LLC</h1>
      </div>
    )
  }
}

export default KrazyKeetGames;
