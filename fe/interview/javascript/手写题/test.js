function limit(maxCount) {
  let queue = []
  let activeCount = 0
  const next = () => {
    activeCount--
    if (queue.length > 0) {
      queue.shift()()
    }
  }
  const run = async (fn, resolve, args) => {
    activeCount++
    const result = await (async () => fn(...args))
    resolve(result)
    next()
  }
  const push = async (fn, resolve, args) => {
    queue.push(run.bind(null, fn, resolve, args))
    if (activeCount < maxCount && queue.length > 0) {
      queue.shift()()
    }
  }
  const runner = (fn, ...args) => {
    return new Promise((resolve, reject) => {
      push(fn, resolve, args)
    })
  }
  return runner
}
async function start() {
  let runner = limit(3);
  let tasks = [
    () => sleep(1, "1"),
    () => sleep(1, "1"),
    () => sleep(1, "1"),
    () => sleep(1, "1"),
    () => sleep(1, "1"),
  ].map(runner);
  let result = await Promise.all(tasks);
  console.log(result);
}
start()