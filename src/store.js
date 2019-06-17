import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getFirebase } from 'react-redux-firebase';

const initialState = {};
// const middleware = [thunk];
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(thunk.withExtraArgument({getFirebase})),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
	));

export default store;