/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 时间复杂度太高
// var maxProfit = function(prices) {
//     let res = 0;
//     const len = prices.length;

//     for(i=0; i< len; i++) {
//         for(j = i; j< len; j++) {
//             const cur= prices[j] - prices[i];
//             if(cur > res) res = cur;
//         }
//     }
//     return res;
// };

const maxProfit = (prices) => {
  const len = prices.length;

  // 如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来

  // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
  // 第i天买入股票，所得现金就是买入今天的股票后所得现金即：-prices[i]
  // 那么dp[i][0]应该选所得现金最大的，所以dp[i][0] = max(dp[i - 1][0], -prices[i]);

  // 如果第i天不持有股票即dp[i][1]， 也可以由两个状态推出来

  // 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
  // 第i天卖出股票，所得现金就是按照今天股票价格卖出后所得现金即：prices[i] + dp[i - 1][0]

  // 创建dp数组
  const dp = new Array(len).fill([0, 0]);
  // dp数组初始化
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    // 更新dp[i]
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ];
  }
  return dp[len - 1][1];
};
// @lc code=end
