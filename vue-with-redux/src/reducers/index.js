import { combineReducers } from 'redux';

import {TodosReducer} from './todos.reducer';

export default combineReducers({
  todos: TodosReducer
});