import React, { Component , useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import './scss/style.scss';
import {loadUser} from './Redux/Actions/Auth';
import store from './store';
import {Provider} from 'react-redux';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {

  if (localStorage.user) {
    ProtectedRoute(localStorage.user);
  }
    useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store = {store}>
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <ProtectedRoute path="/">
            <TheLayout />
          </ProtectedRoute>
        </Switch>
      </React.Suspense>
    </HashRouter>
    </Provider>
  );
}

export default App;
