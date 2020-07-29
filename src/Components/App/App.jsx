import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../store';
import Navbar from '../../Containers/Navbar';

const App = () => (
  <div className="app">
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    </Provider>
  </div>
);

export default hot(App);
