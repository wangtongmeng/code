// 1. 箭头函数和this的相关问题 ======================>
// 箭头函数不绑定 this，会捕获其所在的上下文的 this 值，作为自己的 this 值
// 作用域只有全局作用域window和局部作用域函数
// 谁最后调用的函数，函数内的this指向的就是谁(不考虑箭头函数)。

// var obj = {
//   say: function () {
//     var f1 = () => {
//       console.log("1111", this);
//     };
//     f1();
//   },
//   pro: {
//     getPro: () => {
//       console.log(this);
//     },
//   },
// };
// var o = obj.say;
// o();
// obj.say();
// obj.pro.getPro();

// ----------------------

// var name = "window";
// var obj1 = {
//   name: "obj1",
//   foo: function () {
//     console.log(this.name);
//   },
// };

// var obj2 = {
//   name: "obj2",
//   foo: () => {
//     console.log(this.name);
//   },
// };

// obj1.foo();
// obj2.foo();

// ----------------------

// var obj = {
//   name: "obj",
//   foo1: () => {
//     console.log(this.name);
//   },
//   foo2: function () {
//     console.log(this.name);
//     return () => {
//       console.log(this.name);
//     };
//   },
//   son: {
//     name: "son",
//     foo3: () => {
//       console.log(this.name);
//     },
//   },
// };

// var name = "window";
// obj.foo1();
// obj.foo2()();
// obj.son.foo3();

// ----------------------
// var name = "window";
// var person1 = {
//   name: "person1",
//   foo1: function () {
//     console.log(this.name);
//   },
//   foo2: () => console.log(this.name),
//   foo3: function () {
//     return function () {
//       console.log(this.name);
//     };
//   },
//   foo4: function () {
//     return () => {
//       console.log(this.name);
//     };
//   },
// };
// var person2 = { name: "person2" };

// person1.foo1(); // person1
// person1.foo1.call(person2); // person2

// person1.foo2(); // person1
// person1.foo2.call(person2); // person1

// person1.foo3()(); // person1
// person1.foo3.call(person2)(); // window
// person1.foo3().call(person2); // person2

// person1.foo4()(); // window
// person1.foo4.call(person2)(); // window
// person1.foo4().call(person2); // person2

// <=========================

// ------------------------>
// console.log("1");

// setTimeout(function () {
//   console.log("2");

//   process.nextTick(function () {
//     console.log("3");
//   });

//   new Promise(function (resolve) {
//     console.log("4");

//     resolve();
//   }).then(function () {
//     console.log("5");
//   });
// });

// process.nextTick(function () {
//   console.log("6");
// });

// new Promise(function (resolve) {
//   console.log("7");

//   resolve();
// }).then(function () {
//   console.log("8");
// });

// setTimeout(function () {
//   console.log("9");

//   process.nextTick(function () {
//     console.log("10");
//   });

//   new Promise(function (resolve) {
//     console.log("11");

//     resolve();
//   }).then(function () {
//     console.log("12");
//   });
// });

// js事件循环一次只能执行一个宏任务,  一次可以执行多个微任务。下面这个有个简短的例子
//<----------------------

// ==================>
// js事件循环一次只能执行一个宏任务,  一次可以执行多个微任务。
setTimeout(() => {
  console.log("timer1");
  var p = new Promise((r) => {
    console.log("promise1");
    r();
  });
  p.then(() => {
    console.log("p1 end");
  });
});

setTimeout(() => {
  console.log("timer2");
});
// <==================
