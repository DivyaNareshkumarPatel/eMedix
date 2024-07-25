import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('adminToken');

  return token ? element : <Navigate to="/adminLogin" replace />;
};

export default ProtectedRoute;
