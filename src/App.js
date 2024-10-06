import React from 'react';
import { useRoutes } from 'react-router-dom'; // Ensure correct hook usage
import Home from './components/Home';
import TeamMatches from './components/TeamMatches';
import NotFound from './components/NotFound';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/TeamMatches/:id', element: <TeamMatches /> },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
}

export default App;
