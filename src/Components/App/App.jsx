import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import ROUTES from '../../Routes/index';
import store from '../../store';
// TEGYÉL BELE ROUTINGOT

const { MainPage } = ROUTES;

const App = () => (
  <div className="app">
    <Provider store={store}>
      <MainPage />
    </Provider>
  </div>
);

export default hot(App);
