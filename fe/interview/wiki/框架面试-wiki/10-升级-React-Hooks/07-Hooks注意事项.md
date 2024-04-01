# React Hooks 的坑

## useState 的值，只有第一次有效

useState 初始化值

- 只在 render 时执行
- re-render 时不会重新初始化
- 只能通过 setState 来修改

参考 `UseStateTrap.js` 代码

## useEffect 内部不能修改 state

useEffect 里面使用到的 state 的值, 固定在了 useEffect 内部， 不会被改变，除非 useEffect 刷新，重新固定state的值

参考 `UseEffectChangeState.js`

## useEffect 死循环

如果依赖项（即第二个参数）里有对象、数组，就会出现死循环。所以，依赖项里都要是值类型。
可以用 useAxios 进行演示，加一个 config 依赖项

因为 React Hooks 是通过 `Object.is` 进行依赖项的前后比较。
如果是值类型，则不妨碍。
如果是引用类型，前后的值是不一样的（纯函数，每次新建值），就类似 `{x:100} !== {x:100}`
