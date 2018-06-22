import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Tasks from './components/tasks';
import finished from './components/finished';
import unfinish from './components/unfinish';
import configureStore from './stores/configureStore'
import registerServiceWorker from './registerServiceWorker';

var initialState = {
  showaddpop: false, 
  // finished: 1,
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
  }, {
    id: 3,
    name: '喝水',
    desc: '喝水',
    status : 1
  }, {
    id: 4,
    name: '写代码',
    desc: '写代码',
    status : 0
  }
]
}
ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <BrowserRouter >
    <App>
    <Route exact path="/" component={Tasks}/>
    <Route path="/unfinish" component={unfinish} />
    <Route path="/finished" component={finished} /> 

    </App>

    </BrowserRouter>
    
  </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
