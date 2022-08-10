import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

ReactDOM.render(<Router>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile" component={User} />
        <Route path="/profile/child" component={User} /> {/* /profile/child 如果不加exact 会匹配 /profile 和 /profile/child对应的组件 */}
    </Switch>
</Router>, document.getElementById('root'))


/* 
Switch 匹配到一个就不再继续匹配了

*/