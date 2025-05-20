
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useGeoAware } from '@/contexts/GeoAwareContext';

// Import dashboard components
const StudentLabDashboard = React.lazy(() => import('@/pages/dashboards/StudentLabDashboard'));
const CreatorLabDashboard = React.lazy(() => import('@/pages/dashboards/CreatorLabDashboard'));
const MentorHubDashboard = React.lazy(() => import('@/pages/dashboards/MentorHubDashboard'));
const NGOLabDashboard = React.lazy(() => import('@/pages/dashboards/NGOLabDashboard'));
const CivicScienceDashboard = React.lazy(() => import('@/pages/dashboards/CivicScienceDashboard'));
const AdminOpsDashboard = React.lazy(() => import('@/pages/dashboards/AdminOpsDashboard'));

const AuthRouter: React.FC = () => {
  const { user, userMetadata, isLoading } = useAuth();
  const { location, isLoading: isLoadingGeo } = useGeoAware();
  
  // If authentication is still loading, show a loading indicator
  if (isLoading || isLoadingGeo) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-primary"></div>
          <p className="text-xl">Loading your dashboard...</p>
        </div>
      </div>
    );
  }
  
  // If no user is authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // If user has no role, redirect to onboarding
  if (!userMetadata?.role) {
    return <Navigate to="/onboarding" replace />;
  }
  
  // Route based on user role
  switch (userMetadata.role) {
    case 'student':
      return <StudentLabDashboard />;
    case 'builder':
      return <CreatorLabDashboard />;
    case 'mentor':
      return <MentorHubDashboard />;
    case 'ngo':
      return <NGOLabDashboard />;
    case 'gov':
      return <CivicScienceDashboard />;
    case 'admin':
      return <AdminOpsDashboard />;
    default:
      // Fallback to a default dashboard or onboarding
      return <Navigate to="/onboarding" replace />;
  }
};

export default AuthRouter;
