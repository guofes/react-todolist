import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import {createHashHistory} from 'history';
import './index.css';
import App from './components/App';
import Tasks from './components/tasks';
import configureStore from './stores/configureStore'
import Router1 from './components/router1';
import registerServiceWorker from './registerServiceWorker';

var initialState = {
  showaddpop: false, 
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
}
// import { connect } from 'react-redux';
// import {
//   addTodo,
//   completeTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './actions';

// const history = createHashHistory({queryKey: false});
ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <BrowserRouter>

    <Route path="/" component={App}>
    <Switch>

      {/* <IndexRoute component={Router1}/> */}
      <Route path="/tasks" component={Tasks}/>
      </Switch>
    </Route>
    </BrowserRouter>
    
  </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
