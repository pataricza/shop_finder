import {
  GET_ALL_SHOPS_PENDING, GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_ERROR,
} from '../consts/actionTypes';

const initialState = {
  shops: null,
  pending: false,
  error: null,
};

const saveAllShops = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SHOPS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_SHOPS_SUCCESS: {
      const { shops } = action.payload;
      return {
        ...state,
        shops,
      };
    }
    case GET_ALL_SHOPS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default saveAllShops;
