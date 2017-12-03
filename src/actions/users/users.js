import { createActions } from "redux-actions";

export const {
  user: {
    fetchRequest: fetchUserRequest,
    fetchSuccess: fetchUserSuccess,
    fetchFailure: fetchUserFailure
  }
} = createActions({
  USER: {
    FETCH_REQUEST: undefined,
    FETCH_SUCCESS: [user => user, user => ({ length: user.length })],
    FETCH_FAILURE: undefined
  }
});
