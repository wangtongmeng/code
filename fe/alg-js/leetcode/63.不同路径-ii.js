/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // const m = obstacleGrid.length
  // const n = obstacleGrid[0].length
  // const dp = Array(m).fill().map(() => Array(n).fill(0))

  // for (let i = 0; i < m && obstacleGrid[i][0] !== 1; i++) {
  //   dp[i][0] = 1
  // }
  // for (let i = 0; i < n && obstacleGrid[0][i] !== 1; i++) {
  //   dp[0][i] = 1
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i][j - 1] + dp[i - 1][j]
  //   }
  // }

  // return dp[m - 1][n - 1]

  // 内存优化，直接以原数组为dp数组
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0 && obstacleGrid[i][j] === 1) {
        // 如果左上角有障碍物，则返回0
        return 0
      }
      if (obstacleGrid[i][j] === 0) {
        // 第一行和第一列初始化
        if (i === 0) {
          // 如果第一行的左边是1，则说明有障碍物会重置为0，后面都是0
          obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1
        } else if ( j === 0) {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] ?? 1 // 取不到说明是nul或者undefined
        } else {
          // 取左边和上边的和
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j -1]
        }
      } else {
        // 如果是障碍物，则路径为0
        obstacleGrid[i][j] = 0
      }
    }
  }
  return obstacleGrid[m - 1][n - 1]
};
// @lc code=end

