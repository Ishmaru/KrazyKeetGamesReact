// import * as gameList from '/public/games.js';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

console.log('loaded');
class fullSiteApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currElement: props.currElement || 0
    }
  }
  render(){
    return(<div>I</div>);
  }
}

class NavBar extends React.Component{
  renderNavButton(i) {
    return (
      <nav
        value={this.props.navs[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
}

ReactDOM.render(<fullSiteApp currElement{0}/>, document.getElementById('krazykeetgamesapp'));



// class Game extends Component {
//   render() {
//     return (
//       <div className="Game">
//         <img src={this.props.background}></img>
//         <h2>{this.props.name}</h2>
//         <span>{this.props.version}</span>
//         <span>{this.props.description}</span>
//       </div>
//     )
//   }
// }









class NavBar extends React.Component{
  renderNavButton(i) {
    return (
      <nav
        value={this.props.navs[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
}
