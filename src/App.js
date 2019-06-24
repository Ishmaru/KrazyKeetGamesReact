import React, { Component } from 'react';

const krazyKeetGames = (props) =>{
  return(
    <div className="App">
      <NavBar games={props.games}/>
      <ul>{gameArray(props)}</ul>
    </div>
  );
}

const gameArray = (props) => {
  return (
    props.games.map((item, index)=>
      <li className="game_graphic" id={index} key={index}>
        <img src={item.background}></img>
        <div className="text_box">
          <h2>{item.name}</h2>
          <span>{item.version}</span>
          <span>{item.description}</span>
        </div>
      </li>
    )
  );
}

const navigate = (i) =>{
  document.getElementById(i).scrollIntoView();
}

const titleBanner = (props) => {
  return(
    <h1>Krazy Keet Games LLC</h1>
  )
}

const NavBar = (props) => {
  return (
    <nav className="container">
      <ul>
        {
          props.games.map((item, index)=>
            <li key={index} onClick={() => navigate(index)}>
              <img src={item.thumb}/>
            </li>
          )
        }
      </ul>
    </nav>
  );
}


export default krazyKeetGames;
