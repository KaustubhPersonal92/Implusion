import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function UserProfileReducer(state = initialState.userProfile, action) {
  switch (action.type) {
    case types.LOAD_USER_PROFILE_SUCCESS:
      return action.userProfile.data;
    default:
      return state;
  }
}
