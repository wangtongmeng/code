//  (10) [3, 19, 22, 25, 26, 35, 36, 51, 53, 59]
// 1. 实现curry

// 2.实现new ✅

// 3.实现call ❌

// 4.实现数组push

// 5.将js对象转化为树形结构
// 转换前：
source = [
  {
    id: 1,
    pid: 0,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 2,
    name: "div",
  },
];

// 转换为:
tree = [
  {
    id: 1,
    pid: 0,
    name: "body",
    children: [
      {
        id: 2,
        pid: 1,
        name: "title",
        children: [
          {
            id: 3,
            pid: 1,
            name: "div",
          },
        ],
      },
    ],
  },
];

// 6.实现数组扁平化

// 7.实现数组乱序输出

// 8.实现数组map

// 9.实现instanceof

// 10.实现Object.create

// 11.实现寄生组合继承

// 12.遍历页面所有标签名称，输出去重后的标签列表（去重如何保证速度，使用 Set）
// 使用两种方式

// 13. 实现深拷贝
// 注意循环引用的问题
// https://juejin.cn/post/6844903929705136141

// 14.Map和Set的区别

// 15. Object.defineProperty

// 16.遍历一个对象中所有属性有哪些方法

// 17.Css画一个三角形

// 18.实现十进制转三十六进制 ❌

// 19.实现ajax请求 ❌

// 20.vue原理（手写代码，实现数据劫持）****

// 21.你知道哪些http头部信息
// 21.1 浏览器缓存

// 22.http请求跨域问题，你都知道哪些解决跨域的方法 ❌
// 22.1 实现JsonP ✅

// 23.webpack怎么优化
// 23.1happypack和treeShaking

// 24.typescript都有哪些类型
//24.1 type和interface的区别

// 25. react怎么优化 ❌

// 26.算法
// 老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。目标是尽量让更多的孩子满意。
// 如孩子的要求是 1, 3, 5, 4, 2，饼干是1, 1，最多能让1个孩子满足。
// 如孩子的要求是 10, 9, 8, 7, 6，饼干是7, 6, 5，最多能让2个孩子满足。

// 27.算法
// 计算区间最小数字乘以区间和的最大值
// [6 2 1] => 6*6
// [3, 1, 6, 4, 5, 2] => (6+4+5)*4
// 我采用了暴力解法
function calc(arr) {
  const findMin = (a) => a.sort((a, b) => a - b)[0];
  const getSum = (a) => a.reduce((p, c) => p + c);

  const len = arr.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const curArr = arr.slice(i, j + 1);
      const min = findMin(curArr);
      const sum = getSum(curArr);
      const curRes = min * sum;
      res = curRes > res ? curRes : res;
    }
  }

  return res;
}

// console.log(calc([3, 1, 6, 4, 5, 2]));

// 28. 算法题：两个有序链表和并成一个有序链表

// 29. https原理，以及与http的区别 ❌

// 30.less,sass它们的作用是什么

// 31.千分位加逗号

// 32.React组件封装的逻辑，如果让你封装一个组件会怎么封装

// 33.webpack 的原理是什么？loader 和 plugin 的作用是什么？

// 34.ssr 的原理是什么？解决了什么问题？［renderToString，hydrate；首屏时间与SEO］

// 35.100个苹果每个人拿1到5个 问你第一次拿几个可以保证拿到最后一个 ✅
// 不管对方拿几个，你都可以控制你们俩一次总数是6个，所以第一次拿100%6=4

// 36.rem是怎么设置的，手动算的还是用了库 ❌

// 37. LeetCode：300.最长递增子序列

// 38. LeetCode：674. 最长连续递增序列

// 39. React用过哪些Hook，说说原理？

// 40. useMemo和React.memo区别？

// 41. React18和17的变化

// 42.  实现一个LRUCache

// 43. Vue的更新是同步还是异步？为什么这么设计？

// 44. 队头阻塞问题，为什么http2没有完全解决队头阻塞问题？

// 45. 用比较骚的写法统计字符串'asdf182jsadhfasdghgasfd'每个字符出现的次数
[...str].reduce((p, c) => {
  if (p[c]) {
    p[c]++;
  } else {
    p[c] = 1;
  }
  return p;
}, {});

// 46.清除浮动

// 46.vue中$nextTick的作用

// 47.怎么判断链表是否存在环

// 48.实现一个链表

// 49.tcp链接和释放过程，http，https，tcp和udp比较

// 50.给一个数组，sum，n，求数组中是否存在n个数和等于sum

// 51. map和set ,weakMap,和weakSet ❌

// 52. osi七层模型

// 53. 手写双向链表，有增加，移除，插入的功能 ❌

// 54. 手写快排

// 55. 无头链表如何删除中间节点

// 56. 进程和线程的区别

// 57. 打印结果
const p = new Promise((resolve, reject) => {
  console.log(0);
  reject();
  console.log(1);
  resolve();
  console.log(2);
});
p.then((res) => {
  console.log(3);
})
  .then((res) => {
    console.log(4);
  })
  .catch((res) => {
    console.log(5);
  })
  .then((res) => {
    console.log(6);
  })
  .catch((res) => {
    console.log(7);
  })
  .then((res) => {
    console.log(8);
  });

// 58.箭头函数和普通函数的区别

// 59.聊聊Set和Map
// 59.1 然后拓展出 WeakSet 和 WeakMap，说说区别（使用上的），场景（弱引用）

// 60.防抖节流

// 61.浏览器输入 url 后到展示页面的过程
// https://juejin.cn/post/7166870049066582053#heading-9

// 62.SPA应用如何采集路由切换性能

// 63. 用户行为监控

// 64.性能上报上报哪些数据
// https://juejin.cn/post/7097157902862909471#heading-10

// 65.岛屿数量 LeetCode200

// 66.缓存相关
// https://juejin.cn/post/7168637354536599559#heading-5

// 67.http3

// 68.队头堵塞

// 69.requestIdleCallback 和 requestAnimationFrame区别

// 70.全排列 LeetCode46

// 71.盛水最多的容器 leetCode11

// 72.买卖股票的最佳时机

// 73.买卖股票的最佳时机二

// 74.监听页面的所有a标签click事件，判断href是否以https开头；

// 75.爬楼梯|最小花费爬楼梯

// 76.LeetCode：206.反转链表

// 77.let var const 有什么区别

// 78.typescript你都用过哪些类型
// typescript中type和interface的区别

// 79.cookie,session,localstorage,sessionstorage有什么区别
// cookie有哪些属性

// 80.实现一个算法,字符串包含"[]" , "()" , "{}",判断是否正确闭合

// 81.说一下前端路由

// 82.说一下symbol

// 83.前端性能监控有了解吗？（错误的类型以及监控方式，监控方式说了try-catch、Promise.catch和window.onerror）
// Sentry 是一个开源的实时错误追踪和日志记录平台，可以用于监控和报告应用程序中的错误和异常。

// 84.说说白屏优化的方式有哪些？
// 参考性能优化等，骨架屏：React 的 react-content-loader、Vue 的 vue-content-loader

// 85.transition和animation的区别？

// 86.requestAnimationFrame实现获取每秒的帧数

// 86.你能说说babel是怎么解析语法的吗？

// 87.实现一个发布订阅

// 88.说说header常见的字段有哪些？作用分别是什么？(讲了一些常见的) ❌
// Cookie有哪些字段？分别什么作用（讲了SameSite、HTTPOnly）
// Access-Control-Request-Method作用？

// 89.讲讲webpack的原理吧，你掌握到哪种程度？（熟悉优化插件、打包原理和热更新原理，看过核心源码）
// loader和plugin实现过吗？知道原理吗？（讲了前者是函数，后者是类，两个编写形式的不同，同时在源码中的执行位置）
// 说说module、chunk、bundle、asset的区别？
// chunk一定是通过入口生成的吗？（不一定，import动态加载的模块也会作为一个chunk）
// css-loader的作用？（处理依赖关系）
// css中的路径是如何解析的？
// css-loader和file-loader如何一起工作的？

// 90. 根据url字符串解析出参数

// 91.代码输出
// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

// 92.代码输出
// Promise.resolve().then(() => { return new Error('error!!!') }).then(res => { console.log("then: ", res) }).catch(err => { console.log("catch: ", err) })
// 返回任意一个非 promise 的值都会被包裹成 promise 对象，因此这里的return new Error('error!!!')也被包裹成了return Promise.resolve(解决)(new Error('error!!!'))，因此它会被then捕获而不是catch。

// 93。代码输出
// 把finally看成一种特殊的then就行了
// Promise.resolve("1")
//   .then((res) => {
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// Promise.resolve("2")
//   .finally(() => {
//     console.log("finally2");
//     return "我是finally2返回的值";
//   })
//   .then((res) => {
//     console.log("finally2后面的then函数", res);
//   });

// 94.代码输出
// 这个立即执行匿名函数表达式（IIFE）是由window调用的，this指向 window 。
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log(this.foo);
    console.log(self.foo);
    (function () {
      console.log(this.foo);
      console.log(self.foo);
    })();
  },
};
myObject.func();

// 95.代码输出
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);

// 96.代码输出
var a = 1;
function printA() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: printA,
  bar: function () {
    printA();
  },
};
obj.foo(); //
obj.bar(); //
var foo = obj.foo;
foo(); //

// 96.代码输出题
// 非严格模式下，this 不能是 undefined 或 null。所以**在非严格模式下，通过上面七步口诀，如果得出 this 指向是 undefined 或 null，那么 this 会指向全局对象。
// 根据 ECMAScript 规范，bind 方法只能有效地被调用一次。也就是说，如果你对一个函数连续调用两次 bind 方法，第二次的 bind 调用是无效的。
function a() {
  console.log("function a:", this);
  (() => {
    console.log("arrow function: ", this);
  })();
}
a.bind().bind(2)();

// 97.代码输出
obj = {
  func() {
    const arrowFunc = () => {
      console.log(this._name);
    };

    return arrowFunc;
  },

  _name: "obj",
};

obj.func()();

func = obj.func;
func()();

obj.func.bind({ _name: "newObj" })()();

obj.func.bind()()();

obj.func.bind({ _name: "bindObj" }).apply({ _name: "applyObj" })();

// 98. commonJS 和es6的module的区别

// 99. js怎么让一个对象的属性不可修改
// 1. Object.freeze()不能添加新的属性，不能移除现有的属性，不能更改它们的可枚举性、可配置性、可写性或值，对象的原型也不能被重新指定。
// 2.Object.defineProperty(obj, 'propertyName', {
//   value: 'propertyValue',
//   writable: false, // 设置为不可写
// });
// 使用proxy劫持他的set

// 100.代码输出题
var friendName = "World";
(function () {
  if (typeof friendName === "undefined") {
    var friendName = "Jack";
    console.log("Goodbye " + friendName);
  } else {
    console.log("Hello " + friendName);
  }
})();

// 101.算法
// 给定一个非负整数 c ，你要判断是否存在两个整数  a  和  b，使得  a^2 + b^2 = c
// 使用双指针，left++, right--

// 102.react-router 的原理

// 103.react 写一个搜索组件，节流防抖 + 考虑后发先至
// 取消请求可以用AbortController，老一点的方式可以用CancelToken
const controller = new AbortController();

axios
  .get("/foo/bar", {
    signal: controller.signal,
  })
  .then(function (response) {
    //...
  });
// 取消请求
controller.abort();

// 102.大文件上传
