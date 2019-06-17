import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRCS8jnel29AFVyAHRUydtsTsrvYAV1Y4",
  authDomain: "app-9c513.firebaseapp.com",
  databaseURL: "https://app-9c513.firebaseio.com",
  projectId: "app-9c513",
  storageBucket: "",
  messagingSenderId: "1021419337575",
  appId: "1:1021419337575:web:5ffef37a43fa9469"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// export const todosRef = databaseRef.child('posts');