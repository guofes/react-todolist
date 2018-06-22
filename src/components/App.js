import React, { Component } from 'react';
// import {RouteHandler, Link } from 'react-router';


import AddItem from './additem.js';
// import Items from './components/items';
// import Tasks from './tasks';
import logo from '../logo.svg';
import './css/App.css';

import { connect } from 'react-redux';
import { showPop } from '../actions';

class App extends Component {
  // constructor(){
  //   super();

  // }
  // updateFinished(todoItem){
  //   var sum = 0;
  //   console.log(this.state.items);

	// 	this.state.items.forEach( (item) => {
  //     if (item.id === todoItem.id) {
	// 			item.status = todoItem.status;
  //     }
      
  //     if (item.status === 1) {
  //       sum++;
  //     }
  // });

	// 	this.setState({
	// 		finished: sum
	// 	});
  // }
  // updateTotal (todoItem) {
  //   var obj = [], sum = 0;
  //   this.state.items.forEach((item) =>{
  //     if (item.id !== todoItem.id) {
	// 			obj.push(item);
	// 			if (item.status === 1 ) {
	// 				sum++;
	// 			}
	// 		}
  //   });
	// 	this.setState({
	// 		items: obj,
	// 		finished: sum
	// 	});
  // }

  render() {
    const { dispatch,finished,items} = this.props;
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
            <div className="all-btn ac-btn">所有</div>
            <div className="un-btn ac-btn">待做</div>
            <div className="ye-btn ac-btn">完成</div>
            <div className="add1" onClick={ () => dispatch(showPop())}><p>+</p></div>
          </div>
            {
            //   this.state.items.map((item,index) =>
            //   <Items
            //   totalChange={this.updateTotal.bind(this)}
            //   finishedChange={this.updateFinished.bind(this)} 
						// 	item={item}  
						// 	key={index}
              
            //   ></Items>
            // )
            // <Tasks items={this.state.items}
            // finishedChange={this.tofinishedChange.bind(this)}
            //   totalChange={this.tototalChange}
            // ></Tasks>
            // <Tasks></Tasks>
            }
             {/* <Router children></Router> */}
					<li className="numlist">{finished}已完成&nbsp;/&nbsp;{items.length}总数</li>
        </div>
      </div>
      {/* <AddItem needShow={this.state.showAddPop} hidePop={this.hidePop}  addTask={this.addTask}></AddItem> */}
      <AddItem  hidePop={this.hidePop}  addTask={this.addTask}></AddItem>
        
      {/* <Tasks></Tasks> */}
    </div>
    );
  }
}
function select(state){
  return {
    // showaddpop:state.showaddpop
    finished:state.finished,
    items:state.items
  }
}

export default connect(select)(App);
// export default App;
