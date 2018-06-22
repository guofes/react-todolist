import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';


import AddItem from './additem.js';
import logo from '../logo.svg';
import './css/App.css';

import { connect } from 'react-redux';
import { showPop } from '../actions';

class App extends Component {

  render() {
    const { dispatch,items} = this.props;
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
            <Link to="/"  className="all-btn ac-btn">所有</Link>
            <Link to="/unfinish" className="un-btn ac-btn">待做</Link>
            <Link to="/finished" className="ye-btn ac-btn">完成</Link>
            <div className="add1" onClick={ () => dispatch(showPop())}><p>+</p></div>
          </div>

        {this.props.children}
          {/* <li className="numlist">总数 : {items.length}</li> */}
          <div className = "desc">
           <p>待做:</p><div className = "desc-u">
            </div>
            <p>完成:</p><div className = "desc-f">
            </div>
          </div>
        </div>
      </div>
      <AddItem  hidePop={this.hidePop}  addTask={this.addTask}></AddItem>
    </div>
    );
  }
}
function select(state){
  return {
    finished:state.finished,
    items:state.items
  }
}

export default withRouter(connect(select)(App));
// export default App;
