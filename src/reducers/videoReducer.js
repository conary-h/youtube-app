import { FETCH_VIDEOS } from '../actions/types';

const initialState = {
	items:[],
	item: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
    case FETCH_VIDEOS:
    return {
      ...state,
      items: action.payload.items
    }
		default:
			return state;
	}
}