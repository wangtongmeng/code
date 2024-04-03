// // ----------->
// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     // return Promise.resolve(666); // 如果注释这一行，结果又会是什么呢
//     // return Promise.reject(0);
//   })
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// // <-------------

// // ----------->
// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     new Promise((resolve, reject) => {
//       // 没有return会是什么效果？ 没有return不会等待当前new的Promise执行完成，会直接执行下一个then
//       setTimeout(() => {
//         console.log(123);
//         resolve("foo");
//       }, 3000);
//     });
//   })
//   .then((res) => {
//     console.log("res", res);
//   });
// // <-------------

// // ----------->
// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     return new Promise((resolve, reject) => {
//       // 有return的区别
//       setTimeout(() => {
//         console.log(123);
//         resolve("foo");
//       }, 3000);
//     });
//   })
//   .then((res) => {
//     console.log("res", res);
//   });
// // <-------------

// // ----------->
// // catch 如果不return Promise.reject也会被后续的then接收
// const api = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   }, 1000);
// });

// const getData = () =>
//   api
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// getData()
//   .then(() => {
//     console.log("SUCCESS");
//   })
//   .catch(() => {
//     console.log("ERROR");
//   });
// // <-------------

// ----------->
const request = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve("偶数");
      }
      reject("奇数");
    }, 1000);
  });
};

const test = (num) => {
  return request(num).catch((err) => {
    console.log(err);
    // 这里也相当于默认的 return Promise.resolve();
  });
};

test(3).then((res) => {
  console.log("res==>", res);
});
// <-------------
