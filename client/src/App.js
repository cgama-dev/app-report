import React, { Component } from 'react';

import Home from './redux/screens/layout/Home'

import { Provider } from 'react-redux'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import Report from './redux/screens/report/Report'

import store from './redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/report/:projectid" component={Report} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
