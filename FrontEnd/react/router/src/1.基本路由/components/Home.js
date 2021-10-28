import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Home</p>
                <button onClick={()=>this.props.history.push({pathname:'/user',state:{id:1}})}>调转到/user</button>
            </div>
        )
    }
}
