# vue router 使用

- vue-router
- 动态路由
- to 和 push
- hash 和 history
- 懒加载（配合动态组件）

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import(
                /* webpackChunkName: "navigator" */
                './../components/Navigator'
            )
        },
        {
            path: '/feedback',
            component: () => import(
                /* webpackChunkName: "feedback" */
                './../components/FeedBack'
            )
        }
    ]
})
```

```js
const User = {
  // 获取参数如 10 20
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头。能命中 `/user/10` `/user/20` 等格式的路由
    { path: '/user/:id', component: User }
  ]
})
```

```js
const router = new VueRouter({
  mode: 'history', // 使用 h5 history 模式
  routes: [...]
})
```
