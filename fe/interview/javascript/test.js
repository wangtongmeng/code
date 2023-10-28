function throttle(fn, delay) {
  let lastTime = Date.now()
  return function () {
    let context = this, args = arguments, curTime = Date.now()

    if (curTime - lastTime >= delay) {
      lastTime = curTime
      fn.apply(context, args)
    }
  }
}