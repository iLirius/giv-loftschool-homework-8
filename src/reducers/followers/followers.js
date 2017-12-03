import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";
import {
  fetchFollowersFailure,
  fetchFollowersRequest,
  fetchFollowersSuccess
} from "../../actions/followers";

const error = handleAction(
  fetchFollowersFailure,
  (state, action) => action.error,
  null
);

const isFetching = handleActions(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => true
  },
  false
);

const isFetched = handleActions(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => true
  },
  false
);

const ids = handleAction(
  fetchFollowersSuccess,
  (state, action) => action.payload,
  []
);

export const getFollowersError = state => state.followers.error;
export const getFollowersIsFetching = state => state.followers.isFetching;
export const getFollowersIsFetched = state => state.followers.isFetched;
export const getFollowersIds = state => state.followers.ids;

export default combineReducers({ ids, error, isFetching, isFetched });
