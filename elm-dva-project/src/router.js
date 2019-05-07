import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import LoginPage from './routes/LoginPage/LoginPage';
import LoginRedux from './routes/LoginPage/LoginRedux';
// import LoginMsg from './routes/LoginPage/LoginMsg.json';

function RouterConfig({ history }) {
  return ( 
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/redux" exact component={LoginRedux} />
        {/* <Route path="/loginmsg" exact component={LoginMsg} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
