import {
  FINISHED,
} from '../actions';

function finished(state = [], action) {
  switch (action.type) {
    case FINISHED:{
      console.log(state);

    }
    // return [
    //     ...state.slice(0, action.index),
    //     Object.assign({}, state[action.index], {
    //       completed: true
    //     }),
    //     ...state.slice(action.index + 1)
    //   ];
    //   return [
    //     ...state, 
    //     {
    //       id: action.id,
    //       name: action.name,
    //       desc: action.desc,
    //       status: false
    //     }
    //   ];
    // case COMPLETE_TODO:
    //   return [
    //     ...state.slice(0, action.index),
    //     Object.assign({}, state[action.index], {
    //       completed: true
    //     }),
    //     ...state.slice(action.index + 1)
    //   ];
    default:
      return state
  }
}

export default finished;
