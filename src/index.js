import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {createHashHistory} from 'history';
import './index.css';
import App from './App';
import Tasks from './components/tasks';
import registerServiceWorker from './registerServiceWorker';

const history = createHashHistory({queryKey: false});
ReactDOM.render(
    <Router history={history}>

    <Route path="/" component={App}>

      {/* <IndexRoute component={Tasks}/> */}
    </Route>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
