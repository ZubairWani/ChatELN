import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    // You can add a spinner or a proper loading component here
    return <div>Loading...</div>;
  }

  if (!user) {
    // If not loading and no user, redirect to login page
    return <Navigate to="/login" replace />;
  }
  
  // If user is logged in, show the child route content
  return <Outlet />;
};

export default ProtectedRoute;