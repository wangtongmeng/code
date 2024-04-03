/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  // 动态规划思路
  // dp[i]代表起始s，dp[j]代表结束s
  // s dfjsdafas s
  // 上面的是回文的话，就要依赖于dfjsdafas是回文，即dp[i+1][j-1]是回文
  // 因为依赖i+1，所以i要从大到小开始遍历; 同理依赖j-1，j从小到大开始遍历

  let result = 0;
  let dp = Array.from(Array(s.length), () => Array(s.length).fill(false));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          // 'a' 'ss' 'sas'
          dp[i][j] = true;
          result++;
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true;
          result++;
        }
      }
    }
  }

  console.log(dp);
  return result;
};
// @lc code=end
