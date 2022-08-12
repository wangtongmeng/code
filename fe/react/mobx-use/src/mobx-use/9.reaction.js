/**
 * 
使用reaction(() => value, (value, previousValue, reaction) => { sideEffect }, options?).
Reaction类似于 autorun，但可以让你更加精细地控制要跟踪的可观察对象。 它接受两个函数作为参数：第一个 data 函数，其是被跟踪的函数并且其返回值将会作为第二个函数，effect 函数的输入。 重要的是要注意，副作用只会对 data 函数中被访问过的数据做出反应，这些数据可能少于 effect 函数中实际使用的数据。
一般的模式是在 data 函数中返回你在副作用中需要的所有数据， 并以这种方式更精确地控制副作用触发的时机。 与 autorun 不同，副作用在初始化时不会自动运行，而只会在 data 表达式首次返回新值之后运行
 */
