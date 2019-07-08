import React, {} from 'react';

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
        <div className="flex head shadow">
          <div>
            <img className="krazykeetgames" src="../art/krazykeetgames.png" height="96px" alt="krazy keet games"/>
            <h1 className="krazykeetgames">Krazy Keet Games LLC</h1>
          </div>
          <h1 className="kkg">KKG</h1>
            <input className="search shadow" placeholder="Search" name="filterBy" type="text" value={this.state.filterBy} onChange={this.handleChange} />
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
  event.target.parentNode.className = "game_main hidden inline";
  // let indexValue = event.target.id.split("_")[1];
  let parent = event.target.parentNode.nextSibling;
  parent.className = "";
}

//<div className="game_main_img" id={"image_"+index} style="background-color:"{item.background} onClick={handleClick}></div>
            // <div className="button" target="_blank" href={item.youtube}>Trailer</div>
                        // <div className="media flex">
                        // <img id={"image_"+index} onClick={handleClick} className="game_main_img" src={item.background} alt={item.name}></img>
const gameArray = (props) => {
  return (
    filterGames(props.games).map((item, index) =>
      <li className="game" id={index} key={index}>
        <img className="shadow labels" src={item.thumb} alt={item.name + " label"}/>
        <div className="game_main">
          <img id={"image_"+index} onClick={handleClick} className="game_main_img" src={item.background} alt={item.name}></img>
        </div>
        <div className="hidden">
          <div className="more_about">
            <div className="info shadow darker">
              <h2>{item.name}</h2>
              <p>{item.version}</p>
              <p>{item.description}</p>
              <p>{item.details}</p>
              <div className="interactive">
                <div className="button shadow" target="_blank" href={item.download}>Download</div>
                <div className="button shadow" target="_blank" href={item.gitHub}>Source</div>
                <div className="button trailer_btn shadow" target="_blank" href={item.youtube}>Trailer</div>
              </div>
            </div>
            <div className="img_slideshow">
              <ScreenshotSlideshow imgUrl={item.media}/>
            </div>
            <div className="news darker shadow">
            <h3>Latest News:</h3>
              <ul>{newsArray(item.news)}</ul>
            </div>

            <div className="youtube">{YoutubeEmbed(item.youtube)}</div>
          </div>
        </div>
      </li>
    )
  );
}

const YoutubeEmbed = (props) => {
  //Make sure Url saved in DB is compatable with crossorigin Iframe
  let updateYoutubeLink = props.replace("https://youtu.be/", "https://www.youtube.com/embed/").replace("watch?v=", "embed/");
  return(
      <iframe title={props}
      className="shadow youtube_iframe"
      src={updateYoutubeLink} frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  );
}

class ScreenshotSlideshow extends React.Component {
  constructor(props){
    super(props);
    this.state = {imgUrl: this.props.imgUrl[0]};
  }
  componentDidMount(props){
    let indexvalue = 0;
    setInterval(()=>{
      indexvalue < this.props.imgUrl.length -1 ? indexvalue ++ : indexvalue = 0;
      this.setState({
        imgUrl : this.props.imgUrl[indexvalue]
      });
    }, 5000);
  }

  render(){
    return(
      <img className="shadow" src={this.state.imgUrl} alt="screen shots"/>
    )
  }
}

const newsArray = (props) => {
  if(props.length > 0){
    return(
      props.map((item, index) =>
      <li key={index}>
        <h3>{item.title}</h3>
        <span>{item.postDate}</span>
        {newsImage(item)}
        <p>{item.body}</p>
      </li>
      )
    );
  } else {
    return <p>No news posted yet.</p>
  }
}

const newsImage = (props) => {
  if(props.image){
    return (<img src={props.image} alt={props.title + " news"}/>);
  }
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
              <img className="shadow" src={item.thumb} alt={item.name}/>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

// const NewsList = (props) => {
//   return (
//     props.map((item, index)=>
//       <li>
//         <p>{item.body}</p>
//       </li>
//     )
//   )
// }


// class NewsSection extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       news: []
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h2>News</h2>
//         <ul>{NewsList(this.state.news)}</ul>
//       </div>
//     )
//   }
// }

export default krazyKeetGames;
