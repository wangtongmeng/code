import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'
export default class User extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/user/list">用户列表</Link></li>
                    <li><Link to="/user/add">用户添加</Link></li>
                </ul>
                <div>
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/user/list" component={UserList} />
                    <Route path="/user/detail" component={UserDetail} />
                </div>
            </div>
        )
    }
}
