import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // เพิ่ม ThemeProvider

import Register from './Register/Register.jsx';
import Login from './Login/login.jsx';
import NavbarDesktop from './์Navbar/NavbarDesktop.jsx';
import './index.css';
import WelcomeMywebsite from './WelcomeMywebsite/WelcomeMywebsite.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeMywebsite />,
  },
  {
    path: '/Register',
    element: <Register />,
  },{
    path: '/Login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* ห่อ ThemeProvider รอบ RouterProvider */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
