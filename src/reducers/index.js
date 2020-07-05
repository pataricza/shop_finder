import { combineReducers } from 'redux';
import saveAllShops from './AllShopReducers';

const allReducer = combineReducers({
  saveAllShops,
});

export default allReducer;
