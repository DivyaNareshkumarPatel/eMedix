import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ element, allowedRoles, tokenKey, login }) => {
  const token = localStorage.getItem(tokenKey);

  if (!token) {
    return <Navigate to={login} replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    if (!allowedRoles.includes(userRole)) {
      return <Navigate to={login} replace />;
    }

    return element;
  } catch (error) {
    console.error('Error decoding token:', error);
    return <Navigate to="/unauthorized" replace />;
  }
};

export default ProtectedRoute;