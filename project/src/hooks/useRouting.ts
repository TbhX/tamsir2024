import { useState, useEffect } from 'react';

export function useRouting() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const isDashboardRoute = currentPath === '/dashboard';

  return {
    currentPath,
    isDashboardRoute
  };
}