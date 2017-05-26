import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';
import App from './App';

render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'));
