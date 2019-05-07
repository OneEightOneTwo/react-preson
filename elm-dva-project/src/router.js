import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {Redirect}  from 'react-router-dom'
import IndexPage from './routes/IndexPage/IndexPage';
import LoginPage from './routes/LoginPage/LoginPage';
import LoginRedux from './routes/LoginPage/LoginRedux';
// import LoginMsg from './routes/LoginPage/LoginMsg.json';

function RouterConfig({ history }) {
  return ( 
    <Router history={history}>
      <Switch>
        <Redirect from="/" exact to="/login" />
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/redux" exact component={LoginRedux} />
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
