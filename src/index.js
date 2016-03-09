import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//  STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// CONTAINERS
import App from './components/app';
// Store with middleware.
const createStoreWithMiddleware = applyMiddleware(Thunk, Promise)(createStore);
// Store with middleware and reducers
const State = combineReducers({
  routing: routerReducer
});
const store = createStoreWithMiddleware(State);
// Sync history with store
const history = syncHistoryWithStore(browserHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>
  document.querySelector('#container'));
