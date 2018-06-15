import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute} from 'react-router';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
// import {createHashHistory} from 'history';
import './index.css';
import App from './App';
import Router1 from './components/router1';
import Items from './components/items';
import registerServiceWorker from './registerServiceWorker';

// const history = createHashHistory({queryKey: false});
ReactDOM.render(
    <BrowserRouter>

    <Route path="/" component={App}>

      {/* <IndexRoute component={Router1}/> */}
      {/* <Route path="/tasks" component={Items}/> */}
    </Route>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
