import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import authReducer from './authReducer';
import timeDateReducer from './timeDateReducer';
import { reducer as formReducer } from 'redux-form';
// import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
	videos: videoReducer,
	session: authReducer,
	form: formReducer,
	dateTime: timeDateReducer
	// firebase: firebaseReducer
});