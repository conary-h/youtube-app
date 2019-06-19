import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogIn from '../../components/LogIn';
import VideoList from '../../components/VideoList'
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { isAuthenticated, searchedVideos } = this.props;
    const searchWrapper = document.querySelector('.search-wrapper');

    searchWrapper ? searchWrapper.classList.remove('hide') : '';
    return (
      <div className="container">
        {!isAuthenticated && <LogIn />}
        {searchedVideos.length && <VideoList />}
      </div>
    )
  }
}
/* Home.propTypes = {
  authUser: PropTypes.func.isRequired,
}; */

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
  searchedVideos: state.videos.searchedVideos
});

export default connect(mapStateToProps)(Home);