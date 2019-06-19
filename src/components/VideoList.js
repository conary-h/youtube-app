import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import PropTypes from 'prop-types';


class VideoList extends Component {
  static propTypes = {
    isSavedPlaylist: PropTypes.bool,
  };
  static defaultProps = {
    isSavedPlaylist: false,
  };
  _renderVideoItem = (videoData) => videoData.map(video => <VideoItem key={video.id.videoId} itemData={video}/>);

  render() {
    const videoList = this.props.isSavedPlaylist ? this._renderVideoItem(this.props.savedVideos) : this._renderVideoItem(this.props.searchedVideos);

    return (
      <div className="video-list">
          {videoList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchedVideos: state.videos.searchedVideos,
  savedVideos: state.videos.savedVideos
});

export default connect(mapStateToProps)(VideoList);
