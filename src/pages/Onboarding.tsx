
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import RoleSelector from '@/components/RoleSelector';

const Onboarding = () => {
  const { user, userMetadata } = useAuth();
  
  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // If user already has a role, redirect to dashboard
  if (userMetadata?.role) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <RoleSelector />;
};

export default Onboarding;
