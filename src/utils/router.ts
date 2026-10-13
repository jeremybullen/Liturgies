import { useState, useEffect } from 'react';

export interface RouteState {
  path: string;
  bookId?: string;
  serviceSlug?: string;
}

export function parsePath(pathname: string): RouteState {
  // Normalize path removing trailing slash
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  const parts = cleanPath.split('/').filter(Boolean);

  if (parts.length === 0) {
    return { path: '/' };
  }

  const bookId = parts[0];
  const serviceSlug = parts[1];

  return {
    path: cleanPath,
    bookId,
    serviceSlug
  };
}

export function navigate(path: string) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

export function useLiturgicalRoute(): [RouteState, (path: string) => void] {
  const [route, setRoute] = useState<RouteState>(() => parsePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return [route, navigate];
}
