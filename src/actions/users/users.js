import { createActions } from "redux-actions";

export const {
  users: {
    fetchRequest: fetchUsersRequest,
    fetchSuccess: fetchUsersSuccess,
    fetchFailure: fetchUsersFailure
  }
} = createActions({
  USERS: {
    FETCH_REQUEST: undefined,
    FETCH_SUCCESS: [user => user, user => ({ length: user.length })],
    FETCH_FAILURE: undefined
  }
});
