const mockRequest = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

const total = 100;

async function queQuest(total, limit, callback) {
  const paramArr = Array.from(Array(total), (_, i) => i);
  const queMap = new Map();

  for (const param of paramArr) {
    const reqPromise = mockRequest(param);
    queMap.set(reqPromise, "");
    const finished = 0;

    reqPromise
      .then(() => {
        callback();
        queMap.delete(p); // 很关键，请求完之后删掉map中的这个请求，是异步的
      })
      .catch(() => {})
      .finally(() => {
        finished++;
      });

    if (limit > total) {
      // 限制并发数>=请求总数，则一次性全部请求完
      if (item === _.last(array)) {
        // 在循环到最后一个请求时执行Promise.all
        await Promise.all(queMap.keys());
      }
    } else {
      // 限制并发数<请求总数，则分批请求
      // 攒满并发数就race
      if (queMap.size >= limit) {
        if (total - finished === poolLimit) {
          // 请求只剩poolLimit个时，需要等待全部请求完
          await Promise.all(queMap.keys());
        } else {
          // 正常请求，请求完一个，添加一个新的请求
          await Promise.race(queMap.keys());
        }
      }
    }
  }
}
