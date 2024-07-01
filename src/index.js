import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ConfirmButton from './ch08/ConfirmButton'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);

reportWebVitals();