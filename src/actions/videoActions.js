import { FETCH_VIDEOS, SAVE_FOR_LATER } from './types';

const gapi = window.gapi = window.gapi || {};

export const fetchVideos = (searchTerm) => (dispatch, getState) => {
  gapi.client.youtube.search.list({
    "part": "snippet",
    "maxResults": 25,
    "type": 'video',
    "q": searchTerm,
  })
  .then((response) => {
    // Handle the results here (response.result has the parsed body).
    dispatch({type: FETCH_VIDEOS, payload: response.result});
  })
  .catch(err => console.error("Execute error", err));
}

export const saveForLater = (videoId, userId) => (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  const savedVideosRef = firebase.database().ref(`savedVideos/${userId}`);

  firebase.database().ref(`savedVideos/'${userId}`).push({id:videoId});

  savedVideosRef.on('value', (snapshot) => {
    dispatch({type: SAVE_FOR_LATER, payload: snapshot.val()});
  });
}

