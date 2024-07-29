// 节流函数
function throttle(fn, delay = 100) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

function test() {
  console.log(1, Date.now())
}

const throttleFn = throttle(test, 200) // 200毫秒内只发一次

setTimeout(() => {
  throttleFn()
}, 0);
setTimeout(() => {
  throttleFn()
}, 100)
setTimeout(() => {
  throttleFn()
}, 200)
