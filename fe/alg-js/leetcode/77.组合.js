/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = []
  let path = []
  function helper(n, k, startIndex) {
    if (path.length === k) {
      result.push([...path])
      return
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      helper(n, k, i + 1)
      path.pop()
    }
  }

  helper(n, k, 1)
  return result

};
// @lc code=end



// let result = []
//   let path = []
//   function helper (n, k, startIndex) {
//     if (path.length === k) {
//       result.push([...path])
//       return
//     }
//     // n - (k - path.length) + 1 剪枝操作
//     for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
//       path.push(i)
//       helper(n, k, i + 1)
//       path.pop()
//     }
//   }

//   helper(n, k, 1)
//   return result
