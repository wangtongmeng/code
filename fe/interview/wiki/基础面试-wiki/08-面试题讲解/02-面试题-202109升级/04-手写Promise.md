# 手写 Promise

要从 0 实现一个 Promise/A+ 的所有功能，是非常复杂的。面试一共 1h ，不可能考这么详细。<br>
再者，绝大部分程序员也无法短时间、高质量的写出一个完整的 Promise 。因为日常不写，只用。

所以，面试考察“手写 Promise”考察的就是一个设计思路，编码能力。并不是真让你写出来使用。

Promise 基本功能（面试时能写出这些，就足够了）
- 初始化
- 异步执行
- `then` `catch` 和 链式调用
- `.resolve` `.reject`
- `.all` `.race`

写代码……

------

`const v = fn1(this.value)` 返回值可能是一个 promise 实例
