import { all } from "redux-saga/effects";
import { watchContentRequest } from "sagas/contentSaga";

export default function * rootSaga() {
  yield all([
    watchContentRequest(),
  ]);
};
