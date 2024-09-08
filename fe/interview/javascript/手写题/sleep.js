function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

sleep(2).then(() => console.log("2秒钟过去了"));

function sleep(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {
    // 空循环，直到时间到
  }
}

console.log("开始");
sleep(2); // 阻塞两秒
console.log("2s过去了");
