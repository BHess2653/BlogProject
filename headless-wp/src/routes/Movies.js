import React, { Component } from 'react';
import '../styles/Movie.css';

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    const dataURL = 'http://localhost:8888//wp-json/wp/v2/movies?_embed';
    fetch(dataURL)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          movies: res,
        });
      });
  }
  render() {
    const movies = this.state.movies.map((movie, index) => {
      return <div className="Movie-div" key={index}>
        <img className="Movie-img" alt="" src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} />
        <p><strong>Title:</strong> {movie.title.rendered}</p>
        <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
        <p><strong>Rating:</strong> {movie.acf.rating}</p>
        <div><strong>Description:</strong><div dangerouslySetInnerHTML={{ __html: movie.acf.description }} /></div>
      </div>;
    });
    return (
      <div className="Movie">
        <h2 className="Movie-title">Movies</h2>
        {movies}
      </div>
    );
  }
}
export default Movie;
