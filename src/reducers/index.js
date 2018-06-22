import { combineReducers } from 'redux';
// import finished from './finished';
import showaddpop from './showpop';
import items from './items';

const rootReducer = combineReducers({
  // "todos": todos,
  // "showp": showp
  showaddpop, 
  // finished,
  items
});

export default rootReducer;
