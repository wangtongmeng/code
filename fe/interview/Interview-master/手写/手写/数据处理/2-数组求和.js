// reduce 实现
function sum(arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur;
  });
}

// 动态规划实现
// function sum(arr) {
//   if (arr.length === 0) return arr[0];
//   const dp = [];
//   dp[0] = arr[0];
//   dp[1] = arr[0] + arr[1];
//   for (let i = 2; i <= arr.length - 1; i++) {
//     dp[i] = arr[i] + dp[i - 1];
//   }

//   return dp[arr.length - 1];
// }

const arr = [1, 2, 3];
console.log(sum(arr));
