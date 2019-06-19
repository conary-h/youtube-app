import { AUTH_USER, LOGOUT_USER, SET_AUTH } from './types';

const gapi = window.gapi = window.gapi || {};
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
const CLIENT_ID = '813658477414-kvmpovph40a2rnk3ocu3qnto2p9k5vf6.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];

// Update UI sign in state changes
const updateSigninStatus = (isSignedIn) => {
  if (isSignedIn) {
    console.log('is signed in');
  } else {
    console.log('is not signed in');
  }
}

const writeUserData = (firebase, currentUser) => {
  firebase.database().ref(`users/'${currentUser.Eea}`).set({
    userId: currentUser.Eea,
    username: currentUser.ig,
    email: currentUser.U3,
    profile_picture : currentUser.Paa
  });
}

export const initClientForSession = () => (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  // Load auth2 library
  gapi.load('client:auth2', () => {
    gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(() => {
      const currentUser = gapi.auth2.getAuthInstance().currentUser.get();
      // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle initial sign in state
      if(gapi.auth2.getAuthInstance().isSignedIn.get()) {
        writeUserData(firebase, currentUser.w3)
        dispatch({type: SET_AUTH, payload: currentUser});
      }
    })
    .catch(error => console.error(error))
  });
}

export const authUser = () => (dispatch) => {
  gapi.auth2.getAuthInstance().signIn().then(res => {
    dispatch({type: AUTH_USER, payload: res});
  });
}

export const logOutUser = () => (dispatch) => {
  gapi.auth2.getAuthInstance().signOut().then(() =>{
    dispatch({type: LOGOUT_USER})
    document.location = '/';
  });
}





