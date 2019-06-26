import React, { Component } from 'react';

const krazyKeetGames = (props) =>{
  return(
    <div className="App">
      <AnimateBanner games={props.games}/>
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
          <p>{item.version}</p>
          <p>{item.description}</p>
          <p>{item.details}</p>
          <img src={item.media[0]}></img>
          <img src={item.media[1]}></img>
          <img src={item.media[2]}></img>
          <a target="_blank" href={item.youtube}>Trailer</a>
          <a target="_blank" href={item.download}>Download</a>
          <a target="_blank" href={item.gitHub}>Source</a>
        </div>
      </li>
    )
  );
}

const navigate = (i) =>{
  document.getElementById(i).scrollIntoView();
}

const timerBanner = (me) => {
  setTimeout(()=>{
    me.setState({banner : me.props.games[Math.floor(Math.random() * me.props.games.length)].background});
    timerBanner(me);
  }, 6000);
}

class AnimateBanner extends React.Component{
  constructor(props){
    super(props);
    this.state = {banner: "../art/annexback.jpg"}
  }
  componentDidMount(props){
    timerBanner(this);
  }

  render() {
    return(
      <div>
        <h1>Krazy Keet Games LLC</h1>
        <img src={this.state.banner} alt="krazyKeetGames"/>
      </div>
    )
  }
}

const NavBar = (props) => {
  return (
    <nav className="container">
      <ul>
        {
          props.games.map((item, index)=>
            <li key={index} onClick={() => navigate(index)}>
              <img src={item.thumb} alt={item.name}/>
            </li>
          )
        }
      </ul>
    </nav>
  );
}


export default krazyKeetGames;
