import { takeLatest, call, put } from "redux-saga/effects";

import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess
} from "../../actions/users";

import { getUserInformation } from "../../api";

function* onfetchUserRequest() {
  try {
    const cartData = yield call(getUserInformation);
    yield put(fetchUserSuccess(cartData));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export default function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, onfetchUserRequest);
}
