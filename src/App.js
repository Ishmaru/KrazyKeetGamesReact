import React, { Component } from 'react';

const krazyKeetGames = (props) =>{
  return(
    <div className="App">
      <h1>Krazy Keet Games LLC</h1>
      <AnimateBanner games={props.games}/>
      <NavBar games={props.games}/>
      <div className="container">
        <ul>{gameArray(props)}</ul>
      </div>
    </div>
  );
}
       // <img className="game_main" src={item.background}></img>
const gameArray = (props) => {
  return (
    props.games.map((item, index)=>
      <li className="game" id={index} key={index}>
        <div className="game_main">
          <img src={item.background}></img>
        </div>
        <div className="text_box">
          <h2>{item.name}</h2>
          <p>{item.version}</p>
          <p>{item.description}</p>
          <p>{item.details}</p>
          <div className="media flex">
            <img src={item.media[0]}></img>
            <img src={item.media[1]}></img>
            <img src={item.media[2]}></img>
          </div>
          <div className="button" target="_blank" href={item.youtube}>Trailer</div>
          <div className="button" target="_blank" href={item.download}>Download</div>
          <div className="button" target="_blank" href={item.gitHub}>Source</div>
        </div>
      </li>
    )
  );
}

const navigate = (i) =>{
  document.getElementById(i).scrollIntoView();
}

class AnimateBanner extends React.Component{
  constructor(props){
    super(props);
    this.state = {banner: "../art/annexback.jpg", index: 0}
  }
  componentDidMount(props){
    setInterval(()=>{
      let indexvalue = Math.floor(Math.random() * this.props.games.length);
      this.setState({
        banner : this.props.games[indexvalue].background,
        index: indexvalue
      });
    }, 7000);
  }

  render() {
    return(
      <div className="jumbotron" onClick={() => navigate(this.state.index)}>
        <img src={this.state.banner} alt="krazyKeetGames"/>
      </div>
    )
  }
}

const NavBar = (props) => {
  return (
    <nav className="navbar flex">
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

const NewsList = (props) => {
  return (
    props.map((item, index)=>
      <li>
        <p>{item.body}</p>
      </li>
    )
  )
}


class NewsSection extends React.Component {
  constructor(props){
    super(props);
    this.state={
      news: []
    }
  }
  render(){
    return(
      <div>
        <h2>News</h2>
        <ul>{NewsList(this.state.news)}</ul>
      </div>
    )
  }
}

export default krazyKeetGames;
