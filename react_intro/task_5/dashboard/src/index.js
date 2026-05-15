import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const notifDiv = document.createElement('div');
notifDiv.id = 'root-notifications';
document.body.prepend(notifDiv);

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.insertBefore(rootDiv, notifDiv.nextSibling);

createRoot(notifDiv).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

createRoot(rootDiv).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
