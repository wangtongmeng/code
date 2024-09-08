// 实现一个函数 实现一个重试功能，当异步任务失败时，等待N秒后会自动重试直到成功或达到最大重试次数。
let count = 0;
function httpReq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 第三次成功
      if (count < 2) {
        count++;
        reject({ msg: "请求错误" });
      } else {
        resolve({ data: "xxx" });
      }
    }, 1000);
  });
}
/**
 *
 * @param task  返回一个promise的异步任务
 * @param maxCount 需要重试的次数
 * @param time  每次重试间隔多久
 * @returns 返回一个新promise
 */
const retry = (task, maxCount = 2, time = 3 * 1000) => {
  return new Promise((resolve, reject) => {
    let count = 0;
    const run = () => {
      console.log("请求");
      task()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          count++;
          if (count > maxCount) {
            reject(err);
          } else {
            setTimeout(run, time);
          }
        });
    };
    run();
  });
};

retry(httpReq)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("超过重连次数", err);
  });
