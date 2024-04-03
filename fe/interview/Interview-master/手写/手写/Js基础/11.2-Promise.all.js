function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Promises must be an array"));
    }

    let results = [];
    let completedCount = 0;

    const handlePromise = (index, value) => {
      results[index] = value;
      completedCount++;

      if (completedCount === promises.length) {
        resolve(results);
      }
    };

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((value) => handlePromise(i, value))
        .catch(reject);
    }
  });
}

const promise1 = Promise.resolve(1);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

promiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // 输出: [1, 42, 'foo']
  })
  .catch((error) => {
    console.error(error);
  });
