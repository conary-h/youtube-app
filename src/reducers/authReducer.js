import { AUTH_USER } from '../actions/types';

const initialState = {
	isAuthenticated: false,
	userInfo: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
    case AUTH_USER:
        const isAuthenticated = action.payload.Zi.access_token ? true : false;
    return {
      ...state,
      isAuthenticated,
      userInfo: action.payload.w3
    }
		default:
			return state;
	}
}