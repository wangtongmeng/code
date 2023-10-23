// 手写防抖函数


function debounce(fn, wait) {
  let timer = null
  // 利用闭包
  return function () {
    let context = this, args = arguments

    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}


function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(111);
      resolve()
    }, 2000);
  })
}

const deboundFn = debounce(test, 1000)
deboundFn()
deboundFn()
deboundFn()
setTimeout(() => {
  deboundFn()
}, 1010);