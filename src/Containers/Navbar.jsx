import React from 'react';
import {
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ROUTES from '../Routes/index';

const { MainPage, WelcomePage } = ROUTES;

const routes = [
  { url: '/welcome', name: 'Welcome', component: <WelcomePage /> },
  { url: '/main', name: 'Main Page', component: <MainPage /> },
];

const Navbar = () => {
  const links = routes.map((r) => (
    <li>
      <Link to={r.url}>{r.name}</Link>
    </li>
  ));

  const routArray = routes.map((r) => (
    <Route path={r.url}>
      {r.component}
    </Route>
  ));

  return (
    <div>
      <nav>
        <ul>
          {links}
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
        {routArray}
      </Switch>
    </div>
  );
};

export default Navbar;
