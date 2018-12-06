import {
  TEST,
} from 'actions/TestPage.actions';

export default (
  state = {
    test: null,
  },
  action,
) => {
  switch(action.type) {
    case TEST:
      return {
        test: action.test,
      };
    default:
      return state;
  }
}
