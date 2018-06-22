// 'use strict'
let nextTodoId = 3
export const SHOWADDPOP = 'SHOWADDPOP';
export const CLOSEADDPOP = 'CLOSEADDPOP';
export const FINISHED = 'FINISHED';

export const ITEMS = 'ITEMS';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTask(name,desc) {
    return {
      type:ITEMS,
      id:nextTodoId++,
      name, 
      desc,
      status:0
    };
  }
  
  export function completeTodo(id) {
    return {
      type: COMPLETE_TODO,
      id
    };
  } 
  export function deleteTodo(id) {
    return {
      type: DELETE_TODO,
      id
    };
  }  
  export function finishEd(id) {
    return {
      type: FINISHED,
      id
    };
  }
  
  // export function setVisibilityFilter(filter) {
  //   return {
  //     type: ITEMS,
  //     filter
  //   };
  // }
  export function showPop (){
    return{
      type: SHOWADDPOP,
    };
  }
  export function closePop (){
    return{
      type: CLOSEADDPOP,
    };
  }