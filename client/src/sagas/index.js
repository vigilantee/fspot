import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_MENU } from '../ApiConstants';

function* fetchMenu() {
  const data = yield fetch(GET_MENU)
    .then(response => response.json())
  yield put({ type: "MENU_RECEIVED", data: data, });
}

// function* signInSuccess() {
//   console.log("data is ...", data);
//   const data = yield fetch(SIGN_IN_SUCCESS)
//   fetch(SIGN_IN_SUCCESS,{
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json());
// }

function* actionWatcher() {
  yield takeLatest('GET_MENU', fetchMenu)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}
