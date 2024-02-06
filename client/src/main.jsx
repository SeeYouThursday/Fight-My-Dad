//React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/css/index.css';

//Page Imports
import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DadCreate from './pages/DadCreate.jsx';
import FightBefore from './pages/FightBefore.jsx';
import Results from './pages/Results.jsx';




//Set Up Page Routes Here
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dadcreate',
        element: <DadCreate />
      },
      {
        path: '/fight',
        element: <FightBefore />
      },
      {
        path: '/leaderboard',
        element: <Results />
      }
    ],
  },
]);

//Render the page
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
