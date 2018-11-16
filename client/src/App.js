import React, { Component } from 'react';
import Home from './layout/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Provider } from 'react-redux'
import store from './redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Home />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
