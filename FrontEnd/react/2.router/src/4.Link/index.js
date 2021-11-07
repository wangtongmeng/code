import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

ReactDOM.render(<Router>
    <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/user">用户管理</Link></li>
        <li><Link to="/profile">个人中心</Link></li>
    </ul>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
    </Switch>
</Router>, document.getElementById('root'))
