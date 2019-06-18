import { AUTH_USER } from './types';

const gapi = window.gapi = window.gapi || {};

const loadClient = () => {
  gapi.client.setApiKey("AIzaSyCnIM8Yy-Wd_VUr5Dzin4DDvahdHpo2_aM");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(() => { console.log("GAPI client loaded for API"); },
          (err) => { console.error("Error loading GAPI client for API", err); });
};

export const authUser = () => (dispatch) => {
  console.log('Inside authUser');
  gapi.auth2.getAuthInstance()
    .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
    .then((res) => {
      console.log(res);
      dispatch({type: AUTH_USER, payload: res}) 
    })
    .then(loadClient)
    .catch((err) => console.error("Error signing in", err));

    gapi.load("client:auth2", () => {
      gapi.auth2.init({client_id: "813658477414-kvmpovph40a2rnk3ocu3qnto2p9k5vf6.apps.googleusercontent.com"});
    });
};