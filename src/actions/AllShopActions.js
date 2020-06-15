export const GET_ALL_SHOPS_PENDING = 'GET_ALL_SHOPS_PENDING';
export const GET_ALL_SHOPS_SUCCESS = 'GET_ALL_SHOPS_SUCCESS';
export const GET_ALL_SHOPS_ERROR = 'GET_ALL_SHOPS_ERROR';

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
