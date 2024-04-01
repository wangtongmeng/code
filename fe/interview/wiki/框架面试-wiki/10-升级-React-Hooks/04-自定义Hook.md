# 自定义 Hook

实际开发中，一些公共的功能，需要自己封装起来，这就是自定义 Hook 。
接下来，借用 axios 封装一个自定义 Hook —— useAxios 。

首先，要安装 axios `npm i axios --save`

代码参考 `customHooks/useAxios.js`（注意，名字以 `use` 开头，重要！！！）
和 `CustomHookUsage.js` 组件

总结一下

- 本质是一个函数
- 文件名称以 use 开头，重要！
- 内部正常使用 useState useEffect
- 返回想要的结果即可

------

最后，有很多第三方的 hook 可以直接使用
如 https://nikgraf.github.io/react-hooks/
再如 https://github.com/umijs/hooks
