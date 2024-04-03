/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // dp[i][0] 第i天持有股票
  //    1. 当天购买： 前一天肯定是处于不持有状态 dp[i][0] = dp[i-1][1] - prices[i];
  //    2. 非当天购买 dp[i][0] = dp[i-1][0];
  //    3. 综合： dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i]);
  // dp[i][1] 第i天不持有股票
  //    1.当天卖出，前一天处于持有状态，dp[i][1] = dp[i-1][0] + prices[i];
  //    2.非当天卖出，之前就已经卖了，dp[i][1] = dp[i-1][1];
  //    3.综合：dp[i][1] = Math.max(dp[i-1][1],  dp[i-1][0] + prices[i]);

  const len = prices.length;
  const dp = new Array(len).fill([0, 0]);
  dp[0] = [-prices[0], 0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  return dp[len - 1][1];
};
// @lc code=end
