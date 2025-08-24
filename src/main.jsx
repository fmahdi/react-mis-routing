import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'; 
import Reports from './pages/Reports';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
    {
    path: '/',
    Component: App,
  },
  {
    path: '/reports',
    Component: Reports,
  },
  {
    path: '/blogs',
    Component: Blogs,
  },
  {
    path: '/about',
    Component: AboutUs,
  },

]);

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);