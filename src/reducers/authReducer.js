import { AUTH_USER, LOGOUT_USER, SET_AUTH } from '../actions/types';

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
    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        userInfo: {}
      }
    case SET_AUTH:
        return {
          ...state,
          isAuthenticated: true,
          userInfo: action.payload.w3
        }

		default:
			return state;
	}
}