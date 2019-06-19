import { FETCH_VIDEOS, SAVE_FOR_LATER, FETCH_SAVED_VIDEOS } from '../actions/types';

const initialState = {
	searchedVideos:[],
	savedVideos: []
}

export default function(state = initialState, action) {
	switch(action.type) {
    case FETCH_VIDEOS:
    return {
      ...state,
      searchedVideos: action.payload.items
    }
    case SAVE_FOR_LATER:
    return {
      ...state,
    }
    case FETCH_SAVED_VIDEOS:
    return {
      ...state,
      savedVideos: action.payload
    }
		default:
			return state;
	}
}