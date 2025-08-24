import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'; 

const router = createBrowserRouter([
    {
    path: '/',
    Component: App,
  },
  {
    path: '/blog',
    element:  <p>Porte hobe</p>,
  },
  // {
  //   path: '/about',
  //   Component: RapidRepo,
  // },

]);

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);