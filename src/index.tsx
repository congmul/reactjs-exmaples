import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* React Router can be used anywhere after wrapping App with BrowserRouter  */}
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
