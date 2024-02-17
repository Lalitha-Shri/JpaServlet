import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//root file from where all other components are rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


