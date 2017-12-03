import { takeLatest, call, put } from "redux-saga/effects";

import {
  fetchReposRequest,
  fetchReposSuccess,
  fetchReposFailure
} from "../../actions/repos";

import { getUserRepos } from "../../api";

function* onFetchReposRequest() {
  try {
    const reposData = yield call(getUserRepos);
    yield put(fetchReposSuccess(reposData));
  } catch (error) {
    yield put(fetchReposFailure(error));
  }
}

export default function* fetchUserReposWatch() {
  yield takeLatest(fetchReposRequest, onFetchReposRequest);
}
