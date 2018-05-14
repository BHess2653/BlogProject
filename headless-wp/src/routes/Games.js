import React, { Component } from 'react';
import '../styles/Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }
  componentDidMount() {
    const dataURL = 'http://localhost:8888//wp-json/wp/v2/games?_embed';
    fetch(dataURL)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          games: res,
        });
      });
  }
  render() {
    const games = this.state.games.map((game, index) => {
      return <div className="Game-div" key={index}>
        <img className="Game-img" alt="" src={game._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} />
        <p><strong>Title:</strong> {game.title.rendered}</p>
        <p><strong>Release Year:</strong> {game.acf.release_year}</p>
        <p><strong>imdb Rating:</strong> {game.acf.rating}</p>
        <div><strong>Synopsis:</strong><div dangerouslySetInnerHTML={{ __html: game.acf.description }} /></div>
      </div>;
    });
    return (
      <div className="Game">
        <h2 className="Game-title">Games</h2>
        {games}
      </div>
    );
  }
}
export default Game;
