import { matchPath } from 'react-router';
import routes from './routes';

const matchUrl = url => (
  routes.reduce((acc, route) => matchPath(url, route, { exact: true }) || acc, null)
);

export default matchUrl;
