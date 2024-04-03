/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start

//      a c e
//    0 0 0 0
//  a 0 1 1 1
//  b 0 1 1 1
//  c 0 1 2 2
//  d 0 1 2 2
//  e 0 1 2 3

// dp[i][j] 对应text1[i-1], text2[j-1]
// 这么做是为了初始化方便,不然只初始化dp[0][0]，推导不出后面的值
// 如果下标对应的字母相等 dp[i][j]=dp[i-1][j-1] +1;
// 如果下标对应的字母不相等 dp[i][j] = Math.max(dp[i-1][j], dp[j-1][i])

var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from(new Array(text1.length + 1), () =>
    new Array(text2.length + 1).fill(0)
  );

  for (i = 1; i <= text1.length; i++) {
    for (j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[text1.length][text2.length];
};
// @lc code=end
