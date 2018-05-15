import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import '../App.css';

import Home from './Home';
import Game from './Games';
import Movie from './Movies';

export default () => (
  <BrowserRouter>
    <div>
      <div className="Index-header">
        <Link to="/">Home</Link>{' | '}
        <Link to="/games">Games</Link>{' | '}
        <Link to="/movies">Movies</Link>
      </div>

      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/home" exact component={Home} />
        <Route path="/games" exact component={Game} />
        <Route path="/movies" exact component={Movie} />
      </Switch>
    </div>
  </BrowserRouter>
);
