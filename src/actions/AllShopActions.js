import {
  GET_ALL_SHOPS_PENDING, GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_ERROR,
} from '../consts/actionTypes';

export const getAllShopsPending = () => ({
  type: GET_ALL_SHOPS_PENDING,
});

export const getAllShopsSuccess = (shops) => ({
  type: GET_ALL_SHOPS_SUCCESS,
  payload: shops,
});

export const getAllShopsError = (error) => ({
  type: GET_ALL_SHOPS_ERROR,
  payload: error,
});
