import {
    ITEMS,
    COMPLETE_TODO,
    DELETE_TODO
  } from '../actions';

let nextTodoId = 5;
  function items(state = [], action) {
    switch (action.type) {
        case ITEMS:{
          console.log(state);
        return [
          ...state,
          {
            id: nextTodoId++,
            name: action.name,
            desc: action.desc,
            status:0
          }
        ];
      };
      case COMPLETE_TODO:{
        console.log(action.id);
        console.log(state);
        return [
          //对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的
            ...state.slice(0, action.id),
            Object.assign({}, state[action.id], {
              status: true
            }),
            ...state.slice(action.id + 1)
          ];
        // return state;

      };
      case DELETE_TODO:{
        console.log(action.id);
        var obj = [];
        state.forEach((item) =>{
            if (item.id !== action.id) {
				    obj.push(item);
			}
    });
    return obj;
        // return [
        //   ...state.slice(0, action.id),
        //   Object.assign({}, state[action.id], {
        //     status: true
        //   }),
        //   ...state.slice(action.id + 1)
        // ];

      }
      default:
        return state
    }
  }
  
  export default items;
  