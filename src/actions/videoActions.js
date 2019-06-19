import { FETCH_VIDEOS, SAVE_FOR_LATER, FETCH_SAVED_VIDEOS } from './types';

const gapi = window.gapi = window.gapi || {};

export const fetchVideos = (searchTerm) => (dispatch, getState) => {
  gapi.client.youtube.search.list({
    "part": "snippet",
    "maxResults": 25,
    "type": 'video',
    "q": searchTerm,
  })
  .then((response) => {
    dispatch({type: FETCH_VIDEOS, payload: response.result});
  })
  .catch(err => console.error("Execute error", err));
}

export const saveForLater = (videoId, userId) => (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();

  return firebase.database().ref(`savedVideos/${userId}`).push(videoId);

};

export const fetchSaveVideos = (userId) => (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  const savedVideosRef = firebase.database().ref(`savedVideos/${userId}`);

  savedVideosRef.on('value', (snapshot) => {
    dispatch({type: FETCH_SAVED_VIDEOS, payload: snapshot.val()});
  });
};

