import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import User from './components/User'
ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Home} exact />
            <Route path="/user" component={User} />
            <Route path="/profile" component={Profile} /> {/* 只要符合还会继续匹配 /profile 会显示两个组件的内容*/}
            <Route path="/profile" component={User} />
            <Route path="/profile/child" component={User} /> {/* /profile/child 如果不加exact 会匹配 /profile 和 /profile/child对应的组件 */}
        </div>
    </Router>,
    document.getElementById('root')
);


/* 
就算匹配到一个，也会继续向下匹配

*/