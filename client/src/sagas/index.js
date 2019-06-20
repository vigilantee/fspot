import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_MENU } from '../ApiConstants';

function* fetchMenu() {
  console.log("saga index file");
  const data = yield fetch(GET_MENU)
    .then(response => response.json())
  yield put({ type: "MENU_RECEIVED", data: data, });
}

function* incrementItem() {
  yield put({ type: "INCREMENT_ITEM", data: data, })
}

function* addToCart() {
  yield put({ type: "ADD_TO_CART", data: data, })
}


function* decrementItem() {
  yield put({ type: "DECREMENT_ITEM", data: data, })
}

function* actionWatcher() {
  yield takeLatest('GET_MENU', fetchMenu)
}

function* incrementActionWatcher() {
  yield takeLatest('INCREMENT_ITEM', incrementItem);
}

function* decrementActionWatcher() {
  yield takeLatest('DECREMENT_ITEM', decrementItem);
}

function* addToCartWatcher() {
  yield takeLatest('ADD_TO_CART', addToCart);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    incrementActionWatcher(),
    decrementActionWatcher(),
    addToCartWatcher()
  ]);
}
