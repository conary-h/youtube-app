import React, { Component } from 'react';
import LogIn from '../../components/LogIn';
import VideoList from '../../components/VideoList';
import TimeWidget from '../../components/TimeWidget';
import { fetchSaveVideos } from '../../actions/videoActions';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this.props.fetchSaveVideos(this.props.userInfo.Eea);
  }

  render() {
    const { isAuthenticated, searchedVideos, savedVideos } = this.props;
    const searchWrapper = document.querySelector('.search-wrapper');

    searchWrapper ? searchWrapper.classList.remove('hide') : '';
    return (
      <div className="container">
        <TimeWidget />
        {!isAuthenticated && <LogIn />}
        {searchedVideos.length && <VideoList />}
        {/*Saved Videos
        {savedVideos.length && <VideoList isSavedPlaylist/>}*/}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
  userInfo: state.session.userInfo,
  searchedVideos: state.videos.searchedVideos,
  savedVideos: state.videos.savedVideos
});
const mapDispatchToProps = dispatch => {
  return {
    fetchSaveVideos: (userId) => dispatch(fetchSaveVideos(userId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);