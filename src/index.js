import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS file
import AppRoutes from './AppRoutes'; // Import the routing setup

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
