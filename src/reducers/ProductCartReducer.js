import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ProductCartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.LOAD_CART_SUCCESS:
      return action.cart;
    default:
      return state;
  }
}
