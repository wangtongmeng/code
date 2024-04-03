// 这个方法的核心就是利用宏任务(setTimeout)一次只能执行一个，排队执行
// then里面的方法都是用setTimeout包起来的，然后push到onResolveCallbacks数组
// onResolveCallbacks数组里就是一个一个的setTimeout，第一个执行完成才能执行第二个

// 1. constructor函数定义基础属性
// 1.2 constructor函数定义resove和reject的操作
// 1.3 执行executor(resolve, reject)函数

// then里的逻辑
// 1.通过setTimeout宏任务，把fulfilled和reject的任务加进去
// 2.pending的把setTimeout放到数组里再执行 

class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolveCallbacks.forEach((callback) => callback(this.value));
      }
    };

    const reject = (error) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = error;
        this.onRejectCallbacks.forEach((callback) => callback(this.error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolve, onReject) {
    onResolve = typeof onResolve === "function" ? onResolve : (value) => value;
    onReject =
      typeof onReject === "function"
        ? onReject
        : (error) => {
            throw error;
          };

    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        setTimeout(() => {
          try {
            const result = onResolve(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            const result = onReject(this.error);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "pending") {
        this.onResolveCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const result = onResolve(value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectCallbacks.push((error) => {
          setTimeout(() => {
            try {
              const result = onReject(error);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
  }

  catch(onReject) {
    return this.then(undefined, onReject);
  }
}

const p = new MyPromise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    console.log("p ing");
    resolve("p end");
  }, 4000);
});

p.then((res) => {
  console.log(res);
})
  .then(() => {
    console.log(123);
  })
  .then(() => {
    console.log(666);
  });
