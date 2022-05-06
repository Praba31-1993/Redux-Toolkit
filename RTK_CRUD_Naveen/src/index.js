import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
    </Provider>
  </BrowserRouter>,
  
  document.getElementById('root')
);