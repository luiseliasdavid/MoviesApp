import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap-icons/font/bootstrap-icons.css"

import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'



import { BrowserRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
 </Provider>
);


