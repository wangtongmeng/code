import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router, Route, Link,
    useParams,
    useLocation,
    useHistory,
    useRouteMatch
} from 'react-router-dom'
function Home() {
    return <div>首页</div>
}

function UserDetail() {
    let params = useParams()
    console.log('params', params);
    let location = useLocation()
    console.log('location', location);
    let history = useHistory()
    console.log('history', history);
    return <div>User id: {params.id}<br/>name:{location.state.name}</div>
}
function Post() {
    let match = useRouteMatch({
        path: '/post/:id',
        strict: true,
        sensitive: true
    })
    console.log('match');
    return match?<div>id:{match.params.id}</div>:<div>Not Found</div>
}
ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to={{ pathname: '/user/detail/1', state: { id: 1, name: 'lisi' } }}>用户1详情</Link></li>
                <li><Link to="/post/1">贴子</Link></li>
            </ul>
            <Route path="/" component={Home} />
            <Route path="/user/detail/:id" component={UserDetail} />
            <Route path="/" component={Post} />
        </div>
    </Router>,
    document.getElementById('root')
)