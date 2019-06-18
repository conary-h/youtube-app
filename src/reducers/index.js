import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
// import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
	posts: postReducer,
	session: authReducer,
	form: formReducer,
	// firebase: firebaseReducer
});