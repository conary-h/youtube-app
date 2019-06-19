import React, {Fragment} from 'react';
import { connect } from 'react-redux';

function VideoLanding(props) {
  const videoDetail = props.searchedVideos.length ? props.searchedVideos.filter(video => video.id.videoId === props.match.params.videoId) : [];
  const searchWrapper = document.querySelector('.search-wrapper');
  searchWrapper ? searchWrapper.classList.add('hide') : '';

  return (
    <div className="video-landing container">
      {
        props.searchedVideos.length &&
        <Fragment>
          <iframe src={`https://www.youtube.com/embed/${props.match.params.videoId}`} width="100%" height="715"  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="video-landing-info">
            <h1 className="title">{videoDetail[0].snippet.title}</h1>
            <p className="description">{videoDetail[0].snippet.description}</p>
          </div>
        </Fragment>
      }
    </div>
  )
}
const mapStateToProps = state => ({
  searchedVideos: state.videos.searchedVideos
});

export default connect(mapStateToProps)(VideoLanding);

