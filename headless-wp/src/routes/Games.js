import React, { Component } from 'react';
import '../style.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }
componentDidMount() {
    let dataURL = "http://localhost:8888//wp-json/wp/v2/games?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          games: res
        })
      })
  }
render() {
    let games = this.state.games.map((game, index) => {
      return <div className="App-div" key={index}>
        <img className="App-img" src={game._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} />
        <p><strong>Title:</strong> {game.title.rendered}</p>
        <p><strong>Release Year:</strong> {game.acf.release_year}</p>
        <p><strong>imdb Rating:</strong> {game.acf.rating}</p>
        <div><strong>Synopsis:</strong><div dangerouslySetInnerHTML={ {__html: game.acf.description} } /></div>
      </div>
    });
return (
      <div className="App">
        <h2 className="App-title">Games</h2>
        {games}
      </div>
    )
  }
}
export default Game;
