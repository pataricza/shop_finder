import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import ROUTES from '../../routes/index';
import store from '../../store';

const { MainPage } = ROUTES;

const App = () => (
  <div className="app">
    <Provider store={store}>
      <MainPage />
    </Provider>
  </div>
);

export default hot(App);
