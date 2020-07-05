import { all } from 'redux-saga/effects';
import { allShopSagas } from './allShopSaga';

export default function* rootSaga() {
  yield all([
    ...allShopSagas,
  ]);
}
