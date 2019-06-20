import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_MENU } from '../ApiConstants';
import * as constants from './ActionConstants';
import fetchMenu from './fetchMenuSaga';


function* actionWatcher() {
  yield takeLatest(constants.GET_MENU, fetchMenu)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
