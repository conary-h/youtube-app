import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { reducer as formReducer } from 'redux-form';
// import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
	posts: postReducer,
	form: formReducer,
	// firebase: firebaseReducer
});