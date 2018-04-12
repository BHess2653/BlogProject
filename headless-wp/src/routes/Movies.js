import React, { Component } from 'react';
import '../App.css';

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
componentDidMount() {
    let dataURL = "http://localhost:8888//wp-json/wp/v2/movies?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res
        })
      })
  }
render() {
    let movies = this.state.movies.map((movie, index) => {
      return <div className="App-div" key={index}>
        <img className="App-img" src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} />
        <p><strong>Title:</strong> {movie.title.rendered}</p>
        <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
        <p><strong>Rating:</strong> {movie.acf.rating}</p>
        <div><strong>Description:</strong><div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
      </div>
    });
return (
      <div className="App">
        <h2 className="App-title">Movies</h2>
        {movies}
      </div>
    )
  }
}
export default Movie;
