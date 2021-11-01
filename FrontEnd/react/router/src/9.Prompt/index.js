import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Login from './components/Login'
import Protected from './components/Protected'
import NavHeader from './components/NavHeader'
ReactDOM.render(<Router>
    {/* <NavHeader getUserConfirmation={()=>window.confirm} /> */}
    <NavHeader />
    <ul>
        <li><NavLink className="strong" style={{textDecoration: 'line-through'}} activeStyle={{color:'red'}} to="/" exact>首页</NavLink></li>
        <li><NavLink activeStyle={{color:'red'}} to="/user">用户管理</NavLink></li>
        <li><NavLink activeStyle={{color:'red'}} to="/profile">个人中心</NavLink></li>
    </ul>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} />
        <Protected path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
    </Switch>
</Router>, document.getElementById('root'))



/* 
添加用户时，输入框如果有值，切换路由时做提示是否切换

*/
