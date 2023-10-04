// 节流函数
function throttle(fn, delay) {
  let curTime = null // 初始值为null，第一次调用时如果为null则执行
  return function() {
    let nowTime = Date.now()
    if (!curTime || nowTime - curTime >= delay) {
      curTime = Date.now()
      return fn(...arguments)
    }
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
