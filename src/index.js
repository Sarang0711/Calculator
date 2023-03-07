import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; 

// If you are deleting index.css then you must include App.css here 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

