import React from 'react'
import { Router, Route, browserHistory } from 'react-router';
import Main from './main.jsx';
import Hello from './hello.jsx';
import Stream from './stream.jsx';
import Movies from './movies.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Main}>
          <Route path="/" component={Hello}/>
          <Route path="/stream" component={Stream}/>
          <Route path="/movies" component={Movies}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
