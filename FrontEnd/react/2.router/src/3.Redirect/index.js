import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

ReactDOM.render(<Router>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        {/* 匹配不到就返回首页 */}
        <Redirect to="/" />
    </Switch>
</Router>, document.getElementById('root'))
