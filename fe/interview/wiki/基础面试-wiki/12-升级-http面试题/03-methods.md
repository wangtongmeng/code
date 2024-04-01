# http methods

## 常用 methods

之前，常用的方法就是 get 和 post

- get 从服务端获取数据
- post 向服务端提交数据

现在，随着技术更新，以及 Restful API 设计（下文会讲）。有更多的 methods 被应用

- get 获取数据
- post 新建数据
- patch/put 更新数据
- delete 删除数据

## Restful API

Restful API 是前后端接口的一种设计规范，经历了几年的发展，已经被全面应用。前端面试常考。

- 传统 API 设计：把每个 API 当做一个功能
- Restful API 设计：把每个 API 当做一个资源标识

需要用到的手段

- 不使用 url 参数
- 使用 method 表示操作类型

例如要获取一个列表

- （不使用 url 参数）
- 传统 API 设计：`/api/list?pageIndex=2` —— 一个功能
- Restful API 设计：`/api/list/2` —— 一个资源

再例如要操作一个数据

- 传统 API 设计（每个 API 都是功能）
    - `/api/create-blog` ，post 请求
    - `/api/udpate-blog?id=101`，post 请求
    - `/api/get-blog?id=101`， get 请求
- Restful API 设计（每个 API 都是资源）
    - `/api/blog` ，post 请求
    - `/api/blog/101` ，patch 请求
    - `/api/blog/101` ，get 请求
