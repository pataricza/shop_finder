import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSaga from './sagas/rootSaga';

// PROD
function configureStoreProd(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
  ));
  sagaMiddleware.run(rootSaga);

  return store;
}

// DEV
function configureStoreDev(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    reduxImmutableStateInvariant(),
    sagaMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      const nextReducer = require('./reducers/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);
  return store;
}

export const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
const store = configureStore();

export default store;
