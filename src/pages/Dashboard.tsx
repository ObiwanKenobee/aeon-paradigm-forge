
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import AuthRouter from '@/components/AuthRouter';

const Dashboard = () => {
  const { user } = useAuth();
  
  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Let the AuthRouter handle role-based routing
  return <AuthRouter />;
};

export default Dashboard;
