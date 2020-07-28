import {
  GET_ALL_DATA_REQUESTED,
  GET_PARTNERS_REQUESTED,
  GET_BUSINESSFORMS_REQUESTED,
  ADD_NEW_PARTNER_REQUESTED,
  DELETE_PARTNER_REQUESTED,
} from '../consts/actionTypes';

export const getAllData = () => ({
  type: GET_ALL_DATA_REQUESTED,
});

export const getPartners = () => ({
  type: GET_PARTNERS_REQUESTED,
});

export const getBusinessForms = () => ({
  type: GET_BUSINESSFORMS_REQUESTED,
});

export const addNewPartner = (partner) => ({
  type: ADD_NEW_PARTNER_REQUESTED,
  payload: {
    partner,
  },
});

export const deletePartner = (id) => ({
  type: DELETE_PARTNER_REQUESTED,
  payload: {
    id,
  },
});
