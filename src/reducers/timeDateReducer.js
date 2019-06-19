import { SET_TIME, SET_DATE } from '../actions/types';

const initialState = {
	date: '',
  time: ''
}

export default function(state = initialState, action) {
	switch(action.type) {
    case SET_TIME:
      return {
        ...state,
        time: action.payload
      }
    case SET_DATE:
      return {
        ...state,
        date: action.payload
      }
		default:
			return state;
	}
}