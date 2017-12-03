import { createActions } from "redux-actions";

export const {
  followers: {
    fetchRequest: fetchFollowersRequest,
    fetchSuccess: fetchFollowersSuccess,
    fetchFailure: fetchFollowersFailure
  }
} = createActions({
  FOLLOWERS: {
    FETCH_REQUEST: undefined,
    FETCH_SUCCESS: [
      followers => followers,
      followers => ({ length: followers.length })
    ],
    FETCH_FAILURE: undefined
  }
});
