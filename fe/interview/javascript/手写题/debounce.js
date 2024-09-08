// 手写防抖函数

function debounce(fn, delay) {
  let timer = null;
  // 利用闭包
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

function fn1(a, b) {
  console.log(a + b);
}
const debounceFn = debounce(fn1, 2000);

debounceFn(1, 2);
debounceFn(2, 2);

// function test() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(111);
//       resolve();
//     }, 2000);
//   });
// }

// const deboundFn = debounce(test, 1000);
// deboundFn();
// deboundFn();
// deboundFn();
// setTimeout(() => {
//   deboundFn();
// }, 1010);
