function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    // Promise 的resolve 和 reject 只会被执行一次
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(resolve, reject);
    }
  });
}

const promise1 = Promise.resolve(1);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

promiseRace([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // 1
  })
  .catch((error) => {
    console.error(error);
  });
