import { combineReducers } from "redux";
import { handleAction } from "redux-actions";
import { authorize, logout, setToken } from "../../actions/auth";

const isAuthorized = handleAction(
  authorize,
  (state, action) => action.payload,
  false
);

const token = handleAction(setToken, (state, action) => action.payload, null);

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getToken = state => state.auth.token;

export default combineReducers({ isAuthorized, token });
