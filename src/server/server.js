import express from 'express';
import React from 'react';
import { StaticRouter as Router } from 'react-router';
import sourceMapSupport from 'source-map-support';
import config from '../../config/server.config';
import App from '../app/App';
import NoMatch from '../app/pages/404';
import bloodyRender from './bloodyRender';
import matchUrl from './matchUrl';

const app = express();

sourceMapSupport.install();

app.use('/public', express.static('./build/public'));

app.get('*', (req, res, next) => {
  const { url } = req;
  const match = matchUrl(url);

  if (!match && url !== '/') {
    return res.status(404).send(bloodyRender(<NoMatch />));
  }

  res.status(200).send(bloodyRender(
    <Router context={{}} location={req.url}>
      <App />
    </Router>,
  ));

  return next();
});

app.listen(config.port, () => {
  console.log(`\nReact universal app listening on port: ${config.port}...  😁  🍀`);
});
