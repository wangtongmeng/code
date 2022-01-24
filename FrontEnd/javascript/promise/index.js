const resolvePromsie = (p) => {
  return p.then((data) => [null, data]).catch((err) => [err, null]);
};

let promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ list: [], total: 0 });
    }, 200);
  });
};

let promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ code: 111, errMsg: "数据错误" });
    }, 200);
  });
};

promise1()
  .then((data) => {
    console.log(data); // { list: [], total: 0 }
  })
  .catch((error) => {
    console.log(error);
  });
promise2()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error); // // { code: 111, errMsg: '数据错误' }
  });

!(async function () {
  const [err1, data1] = await resolvePromsie(promise1());
  if (err1) return Promise.reject(err1)
  console.log("1", err1, data1); // 1 null { list: [], total: 0 }
  const [err2, data2] = await resolvePromsie(promise2());
  console.log("2", err2, data2); // 2 { code: 111, errMsg: '数据错误' } null
})();

!(async function () {
  const result1 = await promise1();
  console.log("常规await", result1); // { list: [], total: 0 }

  try {
    const result2 = await promise2();
    console.log(result2);
  } catch (error) {
    console.log("常规await", error); // { code: 111, errMsg: '数据错误' }
  }
})();
