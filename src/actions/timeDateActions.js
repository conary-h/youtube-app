import { SET_TIME, SET_DATE } from './types';
import moment from 'moment';

export const setTime = () => (dispatch, getState) => {
  const time = moment().format('h:mm a');
  dispatch({type: SET_TIME, payload: time});
}
export const setDate = () => (dispatch, getState) => {
  const date = moment().format('MMMM Do YYYY');
  dispatch({type: SET_DATE, payload: date});
}

