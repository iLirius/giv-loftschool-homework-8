import { takeLatest, call, put } from "redux-saga/effects";

import {
  fetchFollowersFailure,
  fetchFollowersRequest,
  fetchFollowersSuccess
} from "../../actions/followers";

import { getUserFollowers } from "../../api";

function* onFetchFollowersRequest() {
  try {
    const reposData = yield call(getUserFollowers);
    yield put(fetchFollowersSuccess(reposData));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export default function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, onFetchFollowersRequest);
}
