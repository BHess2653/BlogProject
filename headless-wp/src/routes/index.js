import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Game from './Games';
import Movie from './Movies';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <Home {...props} />} />
      <Route path='/home' exact component={Home} />
      <Route path='/games' exact component={Game} />
      <Route path='/movies' exact component={Movie} />
    </Switch>
  </BrowserRouter>
);
