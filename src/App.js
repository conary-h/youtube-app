import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Home from './containers/Home';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
