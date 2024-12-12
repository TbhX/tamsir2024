import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { ProjectDashboard } from '../dashboard/ProjectDashboard';
import { BackButton } from '../common/BackButton';

export function DashboardAccess() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleBack = () => {
    if (isAuthenticated) {
      // If authenticated, log out and return to login
      setIsAuthenticated(false);
    } else {
      // If not authenticated, return to home
      window.location.href = '/';
    }
  };

  return (
    <>
      <BackButton 
        onClick={handleBack}
        label={isAuthenticated ? 'Log Out' : 'Return Home'}
      />
      
      {!isAuthenticated ? (
        <LoginForm onSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <ProjectDashboard />
      )}
    </>
  );
}