import React, { Component } from 'react'

export default class User extends Component {
    render() {
        console.dir(this.props);
        return (
            <div>
                <p>User</p>
                <button onClick={()=>this.props.history.goBack(-1)}>返回</button>
            </div>
        )
    }
}


/**
{
    "history": {
        "length": 3,
        "action": "POP",
        "location": {
            "pathname": "/user",
            "search": "",
            "hash": ""
        }
    },
    "location": {
        "pathname": "/user",
        "search": "",
        "hash": ""
    },
    "match": {
        "path": "/user",
        "url": "/user",
        "isExact": true,
        "params": {}
    }
}
 */