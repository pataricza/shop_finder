import React from 'react';
import {
  Link,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import ROUTES from '../Routes/index';

const { MainPage, WelcomePage } = ROUTES;

const routes = [
  {
    key: 1, url: '/welcome', name: 'Welcome', component: <WelcomePage />,
  },
  {
    key: 2, url: '/main', name: 'Main Page', component: <MainPage />,
  },
];

const Navbar = () => {
  const location = useLocation().pathname;

  const links = routes.filter((r) => r.url !== location).map((r) => (
    <li key={r.key}>
      <Link to={r.url}>{r.name}</Link>
    </li>
  ));

  const routArray = routes.map((r) => (
    <Route key={r.key} path={r.url}>
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
