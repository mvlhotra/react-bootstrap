import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import testPage from './TestPage.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  testPage,
})
