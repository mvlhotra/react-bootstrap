import React, { Component } from 'react';
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Route, Switch } from 'react-router'

import './App.scss';
import createRootReducer from './reducers/createRootReducer';
import TestPage from 'components/TestPage';

const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history)),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={TestPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
