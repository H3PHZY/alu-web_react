import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.prepend(rootDiv);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootDiv
);
