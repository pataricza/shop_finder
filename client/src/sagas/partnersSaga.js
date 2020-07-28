import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import { mapKeys, camelCase } from 'lodash';
import {
  GET_ALL_DATA_REQUESTED, GET_ALL_DATA_SUCCEEDED, GET_ALL_DATA_ERROR,
  GET_PARTNERS_REQUESTED, GET_PARTNERS_SUCCEEDED, GET_PARTNERS_ERROR,
  GET_BUSINESSFORMS_REQUESTED, GET_BUSINESSFORMS_SUCCEEDED, GET_BUSINESSFORMS_ERROR,
  ADD_NEW_PARTNER_REQUESTED, ADD_NEW_PARTNER_SUCCEEDED, ADD_NEW_PARTNER_ERROR,
  DELETE_PARTNER_REQUESTED, DELETE_PARTNER_SUCCEEDED, DELETE_PARTNER_ERROR,

} from '../consts/actionTypes';
import * as API from '../services/api';

const host = 'http://localhost:9000';
const getItem = ((id, formList) => (
  formList.find((item) => item.id === id)
));

export function* getAllBusinessData() {
  try {
    const businessForms = yield call(API.getData, `${host}/businessforms`);
    const cities = yield call(API.getData, `${host}/cities`);
    const rawPartners = yield call(API.getData, `${host}/partners`);
    const camelizedPartners = rawPartners.map((partner) => (
      mapKeys(partner, (value, key) => camelCase(key))
    ));
    const partners = camelizedPartners.map((partner) => ( // eslint-disable-line
      {
        ...partner,
        businessForm: getItem(partner.id, businessForms).name,
        city: getItem(partner.id, cities).name,
      }
    ));
    yield put({
      type: GET_ALL_DATA_SUCCEEDED,
      payload: {
        partners,
        cities,
        businessForms,
      },
    });
  } catch (error) {
    console.log(error.message); // eslint-disable-line
    yield put({
      type: GET_ALL_DATA_ERROR,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

export function* getPartners() {
  try {
    const partners = yield call(API.getData, `${host}/partners`);
    yield put({
      type: GET_PARTNERS_SUCCEEDED,
      payload: {
        partners,
      },
    });
  } catch (error) {
    yield put({
      type: GET_PARTNERS_ERROR,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

export function* deletePartner(action) {
  try {
    const { id } = action.payload;
    const partners = yield call(API.deleteData, `${host}/partners?id=${id}`);
    yield put({
      type: DELETE_PARTNER_SUCCEEDED,
      payload: {
        partners,
      },
    });
    yield put({
      type: GET_ALL_DATA_REQUESTED,
    });
  } catch (error) {
    yield put({
      type: DELETE_PARTNER_ERROR,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

export function* getBusinessForms() {
  try {
    const businessForms = yield call(API.getData, `${host}/businessforms`);
    yield put({
      type: GET_BUSINESSFORMS_SUCCEEDED,
      payload: {
        businessForms,
      },
    });
  } catch (error) {
    yield put({
      type: GET_BUSINESSFORMS_ERROR,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

export function* addNewPartner(action) {
  try {
    const { partner } = action.payload;
    if (!partner.id) {
      yield call(API.postData, `${host}/partners`, partner);
    } else {
      yield call(API.putData, `${host}/partners`, partner);
    }
    yield put({
      type: ADD_NEW_PARTNER_SUCCEEDED,
    });
    yield put({
      type: GET_ALL_DATA_REQUESTED,
    });
  } catch (error) {
    yield put({
      type: ADD_NEW_PARTNER_ERROR,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

export const partnerSagas = [
  takeEvery(GET_ALL_DATA_REQUESTED, getAllBusinessData),
  takeEvery(GET_PARTNERS_REQUESTED, getPartners),
  takeEvery(GET_BUSINESSFORMS_REQUESTED, getBusinessForms),
  takeEvery(ADD_NEW_PARTNER_REQUESTED, addNewPartner),
  takeEvery(DELETE_PARTNER_REQUESTED, deletePartner),
];
