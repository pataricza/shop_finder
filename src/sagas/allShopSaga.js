import {
  call, put, delay, takeEvery,
} from 'redux-saga/effects';
import {
  GET_ALL_SHOPS_PENDING, GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_ERROR,
} from '../consts/actionTypes';
import * as API from '../services/api';

export const getUserReducer = (store) => store.userReducer;

export function* getAllShops() {
  try {
    const shops = yield call(API.getData, `${process.env.REACT_APP_API}/shop`);
    yield delay(3000);
    yield put({
      type: GET_ALL_SHOPS_SUCCESS,
      payload: {
        shops,
      },
    });
  } catch (error) {
    yield put({
      type: GET_ALL_SHOPS_ERROR,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

export const allShopSagas = [
  takeEvery(GET_ALL_SHOPS_PENDING, getAllShops),
];
