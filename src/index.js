import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your styles
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Wrapping App in Router to enable routing hooks
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

