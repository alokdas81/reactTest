import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewApp from './components/newList/App'
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from 'react-router'
ReactDOM.render((
    <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
      <Route path = "newList" component = {NewApp} />
   </Router>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
