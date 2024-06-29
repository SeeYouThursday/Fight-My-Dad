//React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/css/index.css';
import { Analytics } from '@vercel/analytics/react';
//Page Imports
import App from './App.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DadCreate from './pages/DadCreate.jsx';
import FightBefore from './pages/FightBefore.jsx';
import Results from './pages/Results.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Logout from './Components/Logout';

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
        element: <DadCreate />,
      },
      {
        path: '/fight',
        element: <FightBefore />,
      },
      {
        path: '/leaderboard',
        element: <Results />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
    ],
  },
]);

//Render the page
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics>
      <RouterProvider router={router} />
    </Analytics>
  </React.StrictMode>
);
