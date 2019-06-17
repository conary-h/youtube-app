import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
	axios('https://jsonplaceholder.typicode.com/posts')
 .then(posts => dispatch({
   type: FETCH_POSTS,
   payload: posts
 }));
}