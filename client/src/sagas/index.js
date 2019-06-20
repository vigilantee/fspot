import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_MENU } from '../ApiConstants';

function* fetchMenu() {
  console.log("saga index file");
  const data = yield fetch(GET_MENU)
    .then(response => response.json())
  yield put({ type: "MENU_RECEIVED", data: data, });
}

function* actionWatcher() {
  yield takeLatest('GET_MENU', fetchMenu)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
