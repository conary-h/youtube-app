import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function VideoItem(props) {
  const {itemData} = props;
  return (
  	<Fragment>
  		<Link to={`/video/${itemData.id.videoId}`}>
		    <div className="video-item">
			    <img className="img-responsive" src={itemData.snippet.thumbnails.high.url} alt={itemData.snippet.title}/>
			    <strong className="video-title">{itemData.snippet.title}</strong>
			    <strong className="video-channel">{itemData.snippet.channelTitle}</strong>
		    </div>
	    </Link>
    </Fragment>
  )
}

VideoItem.propTypes = {
  itemData: PropTypes.object
}
