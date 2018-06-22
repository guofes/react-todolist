import React from 'react';
import './css/add.css';
import ClassNames from 'classnames';//动态class

import { connect } from 'react-redux';
import { closePop, addTask } from '../actions';

class AddItem extends React.Component{
    constructor(props) {
        super(props);
        // this.closePop = this.closePop.bind(this);
        // // this.preventCls = this.preventCls.bind(this);
        this.addItem = this.addItem.bind(this);
        // this.addTask = this.addTask.bind(this);
      }
    //   closePop() {
    //     this.props.hidePop();
    //   }
      addItem(e){
        e.preventDefault();//阻止表单提交
        let name = this.refs.name.value.trim();//获取name的值
        let desc = this.refs.desc.value.trim();
        //数据检验
        if (!name) {
            alert('task name cannot be empty');
            this.refs.name.focus();
            return;
          }
      
          if (!desc) {
            alert('task description cannot be empty');
            this.refs.desc.focus();
            return;
          }

        this.refs.name.value = '';//回空，下一次数据检验
        this.refs.desc.value = '';
        // console.log(name)
        // closePop();
        this.props.dispatch(closePop());
        this.props.dispatch(addTask(name, desc));
        // this.props.hidePop();
      }
    //   addTask(name, desc){
    //     let taskId = this.state.items[0] ? this.state.items.length : 0,
    //       item = {
    //        id:taskId,
    //        name:name,
    //        desc:desc,
    //        status: 0
    //      }
    //      this.state.items.unshift(item);//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
    //      this.setState({items: this.state.items});

    //   }
        
    // });
    render(){
        const { needShow, dispatch} = this.props;
        var classes = ClassNames({
            'addpop':true,
            'show': needShow
            // show:true
        });
        return(
        <div className={classes}>
            <div className="add-input">
                <h3>Add Task</h3> 
                <span className="pop-cls" onClick={ () => dispatch(closePop())}>+</span>
        
                <div className="form-group">
                    <label>name</label>
                    <input type="text" ref="name" />  
                </div>
                <div className="form-group">
                    <label>desc</label>
                    <textarea ref="desc"></textarea>
                </div>

                <div className="form-group">
                    <button onClick={this.addItem}>Submit</button>
                </div>
            </div>
        </div>
        );
    }
}
function lianjie(state){
    return{
     needShow: state.showaddpop
    }
}
// function select(state) {
//     return {
//       visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//       visibilityFilter: state.visibilityFilter
//     };
//   }

// export default AddItem;
export default connect(lianjie)(AddItem);