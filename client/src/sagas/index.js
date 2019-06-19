import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_MENU } from '../ApiConstants';

function* fetchMenu() {
  const json = yield fetch(GET_MENU)
    .then(response => response.json()).then(response=>console.log("resp is ....", response));

  yield put({ type: "MENU_RECEIVED", json: json.articles, });
}

function* actionWatcher() {
  yield takeLatest('GET_MENU', fetchMenu)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
