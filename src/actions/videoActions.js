import { FETCH_VIDEOS } from './types';

const gapi = window.gapi = window.gapi || {};

export const fetchVideos = (searchTerm) => (dispatch, getState) => {
  console.log(searchTerm);
  gapi.client.youtube.search.list({
    "part": "snippet",
    "maxResults": 25,
    "q": searchTerm
  })
  .then((response) => {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
    dispatch({type: FETCH_VIDEOS, payload: response.result});
  })
  .catch(err => console.error("Execute error", err));
}

