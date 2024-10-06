import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Ensure this is imported
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* This ensures all routes are within the Router context */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
