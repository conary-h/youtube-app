import { FETCH_POSTS } from './types';
/* export const fetchPosts = () => dispatch => {
	axios('https://jsonplaceholder.typicode.com/posts')
 .then(posts => dispatch({
   type: FETCH_POSTS,
   payload: posts
 }));
} */

export const fetchPosts = () => (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase();
  const postsRef = firebase.database().ref().child('posts');
  
  postsRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_POSTS,
      payload: snapshot.val()
    });
  });
  
}

