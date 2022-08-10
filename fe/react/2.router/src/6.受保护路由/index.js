import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Login from './components/Login'
import Protected from './components/Protected'

ReactDOM.render(<Router>
    <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/user">用户管理</Link></li>
        <li><Link to="/profile">个人中心</Link></li>
    </ul>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Protected path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
    </Switch>
</Router>, document.getElementById('root'))


/* 
/profile 路由页面必须登录后才能访问
*/
