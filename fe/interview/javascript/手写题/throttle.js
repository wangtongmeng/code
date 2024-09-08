// 节流函数
function throttle(fn, delay = 100) {
  let timer = null;
  return function () {
    if (timer) {
      return;
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

const throttleFn = throttle(fn1, 1000);

throttleFn(1, 2);
throttleFn(1, 3);
setTimeout(() => {
  throttleFn(1, 4);
  throttleFn(1, 5);
}, 1000);
// 3 5
