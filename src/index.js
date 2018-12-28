import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store'
import * as serviceWorker from './serviceWorker';

// CORE root , required to set eventListener
window.helRoot = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, window.helRoot );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
