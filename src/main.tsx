import { createRoot } from 'react-dom/client'
// @ts-ignore
import './index.css'; 
import App from './App.tsx'
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);