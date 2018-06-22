import {
  CLOSEADDPOP,
    SHOWADDPOP
  } from '../actions';
  function showaddpop(state = [], action) {
    switch (action.type) {
      case SHOWADDPOP:{
        // console.log(state)
        return true;
      }
      case CLOSEADDPOP:{
        console.log(state)
        return false;
      }
      default:
        return state
    }
  }
  
  export default showaddpop;
  