import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
// import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
	posts: postReducer,
	sesion: authReducer,
	form: formReducer,
	// firebase: firebaseReducer
});