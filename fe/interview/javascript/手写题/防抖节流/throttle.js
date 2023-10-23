// 节流函数
function throttle(fn, delay) {
  let lastTime = Date.now()
  return function() {
    let context = this, args = arguments, curTime = Date.now()
    if (curTime - lastTime >= delay) {
      lastTime = curTime
      fn.apply(context, args)
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
