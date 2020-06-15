import { GET_ALL_SHOPS_PENDING, GET_ALL_SHOPS_SUCCESS, GET_ALL_SHOPS_ERROR } from '../actions/AllShopActions';

const initialState = {
  shops: [],
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
    case GET_ALL_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload,
      };
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
