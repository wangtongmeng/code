// worker.js

self.addEventListener("message", (event) => {
  // 在这里执行后台任务
  const data = event.data;
  console.log("data", data);

  const result = doSomeHeavyWork(data);

  // 把处理过的数据传给主线程
  self.postMessage(result);
});

function doSomeHeavyWork(data) {
  // 执行耗时的计算或任务
  return data * 2;
}
