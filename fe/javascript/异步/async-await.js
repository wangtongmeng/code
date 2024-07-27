async function fn1() {
  return 100 // 相当于 return Promise.resolve(100) 包装成resolved的Promise
  // return Promise.resolve(200)
}
const res1 = fn1() // 执行 async 函数，返回一个 Promise 对象
res1.then(data => {
  console.log('data', data); // 100
})

!(async function () {
  const p1 = Promise.resolve(300)
  // await + Promise
  const data = await p1 // await  相当于 Promise.then
  console.log('data', data); // 300
})()

!(async function () {
  // await + 固定值 
  const data1 = await 400 // await 后面是数字，会处理成 Promise.resolve(400)
  console.log('data1', data1); // 400
})()


async function fn2() {
  return 100 
}
!(async function () {
  // await + async函数
  const data2 = await fn2() // async函数执行返回的是Promise，结合await 相当于 Promise.then了
  console.log('data2', data2); // 100
})()


!(async function () {
  const p4 = Promise.reject('err') // rejected 状态
  try {
    const res = await p4 // await xxx 相当于 .then。所以下面的log 1 如果rejected就走不到了
    console.log('1', res); // 走不到
  } catch (err) {
    // 打印 2 err
    console.error('2', err); // try...catch 相当于 promise catch
  }
})()