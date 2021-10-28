import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <p>User</p>
                <button onClick={()=>this.props.history.goBack()}>返回</button>
            </div>
        )
    }
}
