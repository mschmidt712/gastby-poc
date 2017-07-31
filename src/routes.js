import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Static from './components/Static';
import Documentation from './gatsby/public/index.html';

var createStaticHandler = (pathname) => class StaticHandler extends React.Component {
  render() {
    return <Static pathname={pathname} />;
  }
}

export default (
  <Route path="/" component={App}>
    <Route name="/help" handler={createStaticHandler('/')} slug="help" />
  </Route>
);


