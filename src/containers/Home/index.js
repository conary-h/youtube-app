import React, { Component } from 'react';
import LogIn from '../../components/LogIn';
import VideoList from '../../components/VideoList';
import TimeWidget from '../../components/TimeWidget';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { isAuthenticated, searchedVideos } = this.props;
    const searchWrapper = document.querySelector('.search-wrapper');

    searchWrapper ? searchWrapper.classList.remove('hide') : '';
    return (
      <div className="container">
        <TimeWidget />
        {!isAuthenticated && <LogIn />}
        {searchedVideos.length && <VideoList />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
  searchedVideos: state.videos.searchedVideos
});

export default connect(mapStateToProps)(Home);