import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import VideoLanding from './containers/VideoLanding'
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/video/:videoId" component={VideoLanding} />
        </Switch>
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
