import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ProductImageReducer(state = initialState.productImages, action) {
  switch (action.type) {
    case types.LOAD_PRODUCT_IMAGE_SUCCESS:
      return action.productImages;
    default:
      return state;
  }
}
