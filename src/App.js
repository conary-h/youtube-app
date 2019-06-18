import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/layout/Header';
import { initClientForSession } from './actions/authActions';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    this.props.initClientForSession();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initClientForSession: () => dispatch(initClientForSession()),
  }
};

export default connect(null, mapDispatchToProps)(App);
