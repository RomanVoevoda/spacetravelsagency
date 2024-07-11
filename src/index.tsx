import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import '@/app/styles/global/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);