import { combineReducers } from 'redux';
import saveAllShops from './AllShopReducers';

const allReducer = combineReducers({
  allShop: saveAllShops,
});

export default allReducer;
