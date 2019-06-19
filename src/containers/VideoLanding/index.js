import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { saveForLater } from '../../actions/videoActions';

function VideoLanding(props) {
  const videoDetail = props.searchedVideos.length ? props.searchedVideos.filter(video => video.id.videoId === props.match.params.videoId) : [];
  const searchWrapper = document.querySelector('.search-wrapper');
  searchWrapper ? searchWrapper.classList.add('hide') : '';

  const videoId = props.match.params.videoId;
  const userId = props.userInfo.Eea;

  return (
    <div className="video-landing container">
      {
        props.searchedVideos.length &&
        <Fragment>
          <iframe src={`https://www.youtube.com/embed/${videoId}`} width="100%" height="715"  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="video-landing-info">
            <h1 className="title">{videoDetail[0].snippet.title}</h1>
            <p className="description">{videoDetail[0].snippet.description}</p>
            <a className="save-later-action" onClick={() => props.saveForLater(videoId, userId)}>Save For Later</a>
          </div>
        </Fragment>
      }
    </div>
  )
}
const mapStateToProps = state => ({
  searchedVideos: state.videos.searchedVideos,
  userInfo: state.session.userInfo
});
const mapDispatchToProps = dispatch => {
  return {
    saveForLater: (videoId, userId) => dispatch(saveForLater(videoId, userId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoLanding);

