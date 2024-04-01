# React router

React router 不是 React 面试题部分的重要考点。

## 基本的使用

- 路由配置（router route path 动态路由）
- 路由跳转（Link to， history.push）
- 钩子（onEnter onUpdate onLeave）—— 也可以使用 route 对应的生命周期来替代这三个（componentDidMount替代onEnter，使用componentDidUpdate替代onUpdate，使用componentWillUnmount替换onLeave。）

```js
// 配置路由
import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

/* 定义 App About Inbox Message 组件，省略 */

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        {/* 动态路由*/}
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
```

```js
// 路由跳转 使用 <Link to="/xxx">
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
```

## 常见的考点

第一，回顾前端路由实现方案： hash 和 pushState

```js
// 使用 history API
import { Router, Route, Link, browserHistory } from 'react-router'
/* 定义 routes ，省略 */
render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)

// 使用 hash
import { Router, Route, Link, hashHistory } from 'react-router'
/* 定义 routes ，省略*/
render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('app')
)
```

第二，基于路由的代码分割，使用 lazy 和 Suspense

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```
