import React, { Component } from 'react';

class krazyKeetGames extends React.Component{
  constructor(props){
    super(props);
    this.state = {games:this.props.games, gamesAll:this.props.games};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({games:filterGames(this.state.gamesAll, event.target.value)})
  }

  render(){
    return(
      <div className="App">
        <div className="flex head">
          <h1>Krazy Keet Games LLC</h1>
            <input className="search" placeholder="Search" name="filterBy" type="text" value={this.state.filterBy} onChange={this.handleChange} />
        </div>
        {this.state.games.length > 1 ? <AnimateBanner games={this.props.games}/> : null}
        {this.state.games.length > 1 ? <NavBar games={this.state.games}/> : null}
        <div className="container">
          <ul>{gameArray(this.state)}</ul>
        </div>
      </div>
    );
  }
}

const handleClick = (event) =>{
  // event.target.className = "game_main_img text_box grayscale"
  event.target.parentNode.className = "game_main hidden inline";
  let indexValue = event.target.id.split("_")[1];
  let parent = event.target.parentNode.nextSibling;
  parent.className = "text_box";
  // console.log(event.target);
}

const gameArray = (props) => {
  // let allGames = props;
  return (
    filterGames(props.games).map((item, index)=>
      <li className="game" id={index} key={index}>
        <div className="game_main">
          <img id={"image_"+index} onClick={handleClick} className="game_main_img" src={item.background}></img>
        </div>
        <div className="hidden">
          <h2>{item.name}</h2>
          <p>{item.version}</p>
          <p>{item.description}</p>
          <p>{item.details}</p>
          <div className="media flex">
            <img src={item.media[0]} width="300px"></img>
            <img src={item.media[1]}width="300px"></img>
            <img src={item.media[2]}width="300px"></img>
          </div>
          <div className="button" target="_blank" href={item.youtube}>Trailer</div>
          <div className="button" target="_blank" href={item.download}>Download</div>
          <div className="button" target="_blank" href={item.gitHub}>Source</div>
        </div>
      </li>
    )
  );
}


const filterGames = (props, filterBy) => {
  if(filterBy){
    let newArray = props.filter(game => game.name.toLowerCase().includes(filterBy.toLowerCase()));
    return newArray;
  }else{
    return props;
  }
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
    }, 8000);
  }

  render() {
    return(
      <div className="jumbotron" onClick={() => navigate(this.state.index)}>
        <img className="game_main_img" src={this.state.banner} alt="krazyKeetGames"/>
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
              <img className="" src={item.thumb} alt={item.name}/>
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
