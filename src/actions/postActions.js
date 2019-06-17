import { FETCH_POSTS, NEW_POST } from './types';
import { databaseRef } from '../config/firebase';
import axios from 'axios';

export const fetchPosts = () => (dispatch, {getFirebase}) => {
	axios('https://jsonplaceholder.typicode.com/posts')
 .then(posts => dispatch({
   type: FETCH_POSTS,
   payload: posts
 }));
}
export const addToDo = newPost => async dispatch => {
  databaseRef.push().set(newPost);
};

export const completeToDo = completePostId => async dispatch => {
  databaseRef.child(completePostId).remove();
};