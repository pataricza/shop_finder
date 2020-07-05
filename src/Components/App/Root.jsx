import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import App from './App';

export const Root = ({ store }) => (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default hot(Root);
