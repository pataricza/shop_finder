import { all } from 'redux-saga/effects';
import { partnerSagas } from './partnersSaga';

export default function* rootSaga() {
  yield all([
    ...partnerSagas,
  ]);
}
