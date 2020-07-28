import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import ROUTES from '../../Routes/index';
import store from '../../store';

const { MainPage, WelcomePage } = ROUTES;

const App = () => (
  <div className="app">
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link to="/main">Main Page</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <WelcomePage />
            </Route>
            <Route path="/main">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </div>
);

export default hot(App);
