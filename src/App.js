import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Navigate from="/" to="/home" />
        </Router>
      </div>
    </Router>
  );
};

export default App;