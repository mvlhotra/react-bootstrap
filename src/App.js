import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.scss';
import rootReducer from './reducers';
import TestPage from 'components/TestPage';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TestPage />
        </div>
      </Provider>
    );
  }
}

export default App;
