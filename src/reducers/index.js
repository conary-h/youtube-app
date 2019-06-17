import { combineReducers } from 'redux';
import postReducer from './postReducer';
// import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
	posts: postReducer,
	// firebase: firebaseReducer
});