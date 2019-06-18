import { AUTH_USER, LOGOUT_USER } from './types';

const gapi = window.gapi = window.gapi || {};
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
const CLIENT_ID = '813658477414-kvmpovph40a2rnk3ocu3qnto2p9k5vf6.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];

/* export const authUser = () => (dispatch) => {
  const loadClient = () => {
    gapi.client.setApiKey("AIzaSyCnIM8Yy-Wd_VUr5Dzin4DDvahdHpo2_aM");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(() => { console.log("GAPI client loaded for API"); },
        (err) => { console.error("Error loading GAPI client for API", err); });
  };

  gapi.auth2.getAuthInstance()
    .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
    .then((res) => {
      dispatch({type: AUTH_USER, payload: res}) 
    })
    .then(loadClient)
    .catch((err) => console.error("Error signing in", err));

  gapi.load("client:auth2", () => {
    gapi.auth2.init({client_id: "813658477414-kvmpovph40a2rnk3ocu3qnto2p9k5vf6.apps.googleusercontent.com", scope: SCOPES});
  });
}; */


export const initClientForSession = () => (dispatch) => {
  // Load auth2 library
  console.log('Inside initClientForSession');
  handleClientLoad();
}

export const authUser = () => (dispatch) => {
  gapi.auth2.getAuthInstance().signIn().then(res => {
    dispatch({type: AUTH_USER, payload: res});
  });
}

export const logOutUser = () => (dispatch) => {
  gapi.auth2.getAuthInstance().signOut().then(() =>{
    dispatch({type: LOGOUT_USER}) 
  });
}

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners
function initClient() {
  gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(() => {
      // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle initial sign in state
      // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

// Update UI sign in state changes
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    console.log('is signed in');
  } else {
    console.log('is not signed in');
  }
} 
