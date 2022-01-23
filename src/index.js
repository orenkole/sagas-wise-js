import React from 'react';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import store from './redux';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact>
            <App />
          </Route>
          <Route path='/blog' exact>
            <Blog />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
