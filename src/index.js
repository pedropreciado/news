import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app.jsx';
import { configureStore } from './store/store';

window.addEventListener('DOMContentLoaded', () => {
  let root = document.querySelector('#root');
  let store = configureStore();
  
  ReactDOM.render(<App store={store}/>, root);
});