import { combineReducers } from 'redux';
import test from './testReducer';

const todoApp = combineReducers({
  test,
});

export default todoApp;
