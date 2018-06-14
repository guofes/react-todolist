import React, { Component } from 'react';
// import {RouteHandler, Link } from 'react-router';


import AddItem from './components/additem.js';
import Tasks from './components/tasks.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {showAddPop:false, 
			finished: 1,
      items: [
        {
        id: 0,
        name: '吃饭',
        desc:'吃饭',
        status: 1
      }, {
        id: 1,
        name: '睡觉',
        desc: '睡觉',
        status: 0
      }, {
        id: 2,
        name: '打豆豆',
        desc: '打豆豆',
        status : 0
      }
    ]
    };
    this.showPop = this.showPop.bind(this);
    this.hidePop = this.hidePop.bind(this);
    this.addTask = this.addTask.bind(this);

  }
  componentDidMount(){
    // let items =[];
    // this.setState({items: items});
    // console.log(this.state.items);
  }

  hidePop() {
    this.setState({showAddPop: false});
  }
  showPop() {
    this.setState({showAddPop: true});
  }
  addTask(name,desc){
   let taskId = this.state.items[0] ? this.state.items.length : 0,
     item = {
      id:taskId,
      name:name,
      desc:desc,
      status: 0
    }
    this.state.items.unshift(item);//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
    this.setState({items: this.state.items});
  }
  updateFinished(todoItem){
    var sum = 0;
    console.log(this.state.items);

		this.state.items.forEach( (item) => {
      if (item.id === todoItem.id) {
				item.status = todoItem.status;
      }
      
      if (item.status === 1) {
        sum++;
      }
  });

		this.setState({
			finished: sum
		});
  }
  updateTotal (todoItem) {
    var obj = [], sum = 0;
    this.state.items.forEach((item) =>{
      if (item.id !== todoItem.id) {
				obj.push(item);
				if (item.status === 1 ) {
					sum++;
				}
			}
    });
		this.setState({
			items: obj,
			finished: sum
		});
  }

  render() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">这是我的第一个 react 应用</h1>
        </header>
        <div className="todolist">
          <div className="header">
            <h2>任务管理</h2>
            <div className="add1" onClick={this.showPop}><p>+</p></div>
          </div>
          <ul>
            {
              this.state.items.map((item,index) =>
              <Tasks
              totalChange={this.updateTotal.bind(this)}
              finishedChange={this.updateFinished.bind(this)} 
							item={item}  
							key={index}
              
              ></Tasks>
            )}
            
          </ul>
					<li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.items.length}总数</li>
        </div>
      </div>
      <AddItem needShow={this.state.showAddPop} hidePop={this.hidePop}  addTask={this.addTask}></AddItem>
        
    </div>
    );
  }
}

export default App;
