import React from 'react';
import './add.css';
import ClassNames from 'classnames';//动态class

class AddItem extends React.Component{
    constructor(props) {
        super(props);
        this.closePop = this.closePop.bind(this);
        // this.preventCls = this.preventCls.bind(this);
        this.addItem = this.addItem.bind(this);
      }
      closePop() {
        this.props.hidePop();
      }
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

        this.props.addTask(name, desc);
        this.props.hidePop();
      }
        
    // });
    render(){
        let classes = ClassNames({
            'addpop':true,
            'show': this.props.needShow
        });
        return(
        <div className={classes}>
            <div className="add-input">
                <h3>Add Task</h3> 
                <span className="pop-cls" onClick={this.closePop}>+</span>
        
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

export default AddItem;