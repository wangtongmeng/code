// 手写防抖函数


function debounce(fn, wait) {
  let timer = null // 通过闭包保存timer

  return function() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn(...arguments)
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