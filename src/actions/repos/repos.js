import { createActions } from "redux-actions";

export const {
  repos: {
    fetchRequest: fetchReposRequest,
    fetchSuccess: fetchReposSuccess,
    fetchFailure: fetchReposFailure
  }
} = createActions({
  REPOS: {
    FETCH_REQUEST: undefined,
    FETCH_SUCCESS: [repos => repos, repos => ({ length: repos.length })],
    FETCH_FAILURE: undefined
  }
});
