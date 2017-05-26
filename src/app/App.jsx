import { Route, Switch } from 'react-router-dom';
import React from 'react';

// components
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Nested from './pages/Nested';
import NoMatch from './pages/404';

// style
import style from './styles/general.scss';

export default () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/about/nested" exact component={Nested} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

