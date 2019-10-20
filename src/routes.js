import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
const baseHistory = browserHistory
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}));

const store = createStore(reducer)
const history = syncHistoryWithStore(baseHistory, store)

export default (
     <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                </Route>      
            </Router>
        </div>
    </Provider>
);
