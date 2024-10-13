import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if token is present

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
