import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Order from './Order';
import Menu from './Menu';
import Login from './Login';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/order" component={Order} />
        <Route path="/menu" component={Menu} />
        <Route path="/login" component={Login} />
        <Route path="/" exact>
          <h1>Welcome to the Cafeteria System</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
