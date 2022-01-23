import React from 'react';
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import store from './redux';
import { history } from './redux/reducers';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact>
          <App />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
