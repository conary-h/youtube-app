import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';


class VideoList extends Component {
  _renderVideoItem = (videoData) => videoData.map(video => <VideoItem key={video.id.videoId} itemData={video}/>);

  render() {
    const videoList = this._renderVideoItem(this.props.searchedVideos);

    return (
      <div className="video-list">
          {videoList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchedVideos: state.videos.searchedVideos
});

export default connect(mapStateToProps)(VideoList);
