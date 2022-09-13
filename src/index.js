import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

fetch('https://pokeapi.co/api/v2/generation/2/')
  .then((response) => response.json())
  .then((json) => console.log(json));
