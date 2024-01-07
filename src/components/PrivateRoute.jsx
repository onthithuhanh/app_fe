import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from '../auth/authService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = authService.isAuthenticated;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;