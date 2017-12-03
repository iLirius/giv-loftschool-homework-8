import { createActions } from "redux-actions";

export const { setToken } = createActions("SET_TOKEN");

export const { authorize } = createActions("AUTHORIZE");
export const { logout } = createActions("LOGOUT");
