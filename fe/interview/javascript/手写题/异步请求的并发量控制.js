function limit(maxCount) {
  let queue = []
  let activeCount = 0
  const next= () => {
    // 下一个任务
    activeCount--
    if (queue.length > 0) {
      queue.shift()()
    }
  }
  const run = async (fn, resolve, args) => {
    // 执行一个函数
    activeCount++
    const result = await (async () => fn(...args))()
    resolve(result)
    next() // 下一个
  }
  const push = async (fn, resolve, args) => {
    queue.push(run.bind(null, fn, resolve, args))
    if (activeCount < maxCount && queue.length > 0) {
      // 队列还没满，且还有任务 启动任务
      queue.shift()()
    }
  }
  const runner = (fn, ...args) => {
    return new Promise(resolve => {
      push(fn, resolve, args)
    })
  }
  return runner
}

async function sleep(n, name = 'test') {
  return new Promise(resolve => {
    console.log(n, name, 'start');
    setTimeout(() => {
    console.log(n, name, 'end', '----------');
      resolve(n, name)
    }, n * 1000);
  })
}

async function start() {
  let runner = limit(3) // 并发量是3
  let tasks = [
    () => sleep(1, '吃饭'),
    () => sleep(3, '睡觉'),
    () => sleep(5, '打游戏'),
    () => sleep(3.5, '学算法'),
    () => sleep(4, '学vue'),
  ].map(runner)
  let result = await Promise.all(tasks)
  console.log(result, 'end');
}

start()