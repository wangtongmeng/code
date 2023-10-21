/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  
};
// @lc code=end


// let startX = startY = 0 // 其实位置
//   let loop = Math.floor(n / 2) // 旋转圈数
//   let mid = Math.floor(n / 2) // 中间位置 横纵坐标都是mid
//   let offset = 1 // 控制每层填充个数 
//   let count = 1 // 更新填充数字
//   let res = new Array(n).fill(0).map(() => new Array(n).fill(0)) // 初始化数组，后面专注填充数字即可

//   while(loop--) {
//     let row = startX, col = startY
//     // 上行从左到右（左闭右开）
//     for (; col < n - offset; col++) {
//       res[row][col] = count++
//     }
//     // 右列从上到下（左闭右开）
//     for (; row < n - offset; row++) {
//       res[row][col] = count++
//     }
//     // 下行从右到左（左闭右开）
//     for (; col > startY; col--) {
//       res[row][col] = count++
//     }
//     // 左列做下到上（左闭右开）
//     for (; row > startX; row--) {
//       res[row][col] = count++
//     }

//     // 更新起始位置
//     startX++;
//     startY++;

//     // 更新offset
//     offset++;
//   }

//   // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
//   if (n % 2 === 1) {
//     res[mid][mid] = count
//   }

//   return res

