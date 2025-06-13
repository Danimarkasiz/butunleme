import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter'ı buradan alıyoruz
import App from './App.jsx'; // App bileşenini içe aktarıyoruz
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Tüm App bileşenini BrowserRouter ile sarmalıyoruz */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
