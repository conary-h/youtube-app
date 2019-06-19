import React, { Component } from 'react';
import { connect } from 'react-redux';


class VideoList extends Component {
  render() {
  console.log(this.props.searchedVideos);

    return (
      <div>
          <h1>Video List</h1>  
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchedVideos: state.videos.searchedVideos
});

export default connect(mapStateToProps)(VideoList);
