// // const dealFn = () => {
// //   return Promise.reject(888);
// // };
// // var fn = async function () {
// //   console.log(999);
// //   try {
// //     await dealFn(); // 在使用 async/await 的情況下，try-catch 塊中的代碼應該加上 await 關鍵字。如果沒有加上 await 關鍵字，則會出現運行時錯誤，因為沒有等待異步操作的完成而直接執行下一行代碼。
// //   } catch (err) {
// //     // return Promise.reject("错误了！！！");
// //     return "错误了！！！";
// //   }
// // };

// // fn()
// //   .then((res) => console.log("then===>", res))
// //   .catch((err) => console.log(err));

// // ===========>
// const request = (isResolve) => {
//   console.log("=====>");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isResolve) {
//         resolve("success");
//       }
//       reject("fail");
//     }, 1000);
//   });
// };

// const testFn = async () => {
//   await request(true).then(() => {
//     return request(true);
//   });
//   console.log("finished");
// };
// testFn();
// // <===========
