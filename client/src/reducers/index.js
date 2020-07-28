import { combineReducers } from 'redux';
import partners from './partnersReducer/partnersReducer';

const allReducer = combineReducers({
  partners,
});

export default allReducer;
