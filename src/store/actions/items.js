import * as actionTypes from './actionTypes';
import axios from 'axios';
// import { addFavProp } from './helper';

export const getItems = () => {
  return async (dispatch) => {
    const {
      data: {
        items
      }
    } = await axios('/browse');
    dispatch({type: actionTypes.RETRIEVE_ITEMS, payload: items});
  }
}

export const toggleFavorite = (item) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    payload: item
  }
}