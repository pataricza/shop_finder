import {
  GET_ALL_DATA_REQUESTED, GET_ALL_DATA_SUCCEEDED, GET_ALL_DATA_ERROR,
  GET_PARTNERS_REQUESTED, GET_PARTNERS_SUCCEEDED, GET_PARTNERS_ERROR,
  GET_BUSINESSFORMS_REQUESTED, GET_BUSINESSFORMS_SUCCEEDED, GET_BUSINESSFORMS_ERROR,
} from '../../consts/actionTypes';
import initialState from './initialState';

const partnersReduducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_DATA_SUCCEEDED: {
      const { partners, businessForms, cities } = action.payload;
      return {
        ...state,
        partners,
        businessForms,
        cities,
        isLoading: false,
      };
    }
    case GET_ALL_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case GET_PARTNERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PARTNERS_SUCCEEDED: {
      const { partners } = action.payload;
      return {
        ...state,
        partners,
        isLoading: false,
      };
    }
    case GET_PARTNERS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case GET_BUSINESSFORMS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BUSINESSFORMS_SUCCEEDED: {
      const { businessForms } = action.payload;
      return {
        ...state,
        businessForms,
        isLoading: false,
      };
    }
    case GET_BUSINESSFORMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default partnersReduducer;
