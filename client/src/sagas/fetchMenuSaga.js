import { put } from 'redux-saga/effects';
import { GET_MENU } from '../ApiConstants';

function* fetchMenu() {
    const data = yield fetch(GET_MENU)
      .then(response => response.json())
  
    yield put({ type: "MENU_RECEIVED", data: data, });
  }

  export default fetchMenu;
