import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess
} from "../../actions/users";

const error = handleAction(
  fetchUserFailure,
  (state, action) => action.error,
  null
);

const isFetching = handleActions(
  {
    [fetchUserRequest]: () => false,
    [fetchUserSuccess]: () => true,
    [fetchUserFailure]: () => true
  },
  false
);

const isFetched = handleActions(
  {
    [fetchUserRequest]: () => false,
    [fetchUserSuccess]: () => true,
    [fetchUserFailure]: () => true
  },
  false
);

const data = handleAction(
  fetchUserSuccess,
  (state, action) => action.payload,
  null
);

export const getUserError = state => state.users.error;
export const getUserIsFetching = state => state.users.isFetching;
export const getUserIsFetched = state => state.users.isFetched;
export const getUserData = state => state.users.data;

export default combineReducers({ error, isFetching, isFetched, data });
