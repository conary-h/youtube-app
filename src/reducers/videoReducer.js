import { FETCH_VIDEOS } from '../actions/types';

const initialState = {
	searchedVideos:[],
	item: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
    case FETCH_VIDEOS:
    return {
      ...state,
      searchedVideos: action.payload.items
    }
		default:
			return state;
	}
}