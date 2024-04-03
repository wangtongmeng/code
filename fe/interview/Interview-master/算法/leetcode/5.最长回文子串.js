/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 动态规划算法
function longestPalindrome(str) {
  const len = str.length;

  // a...a 依赖 dp[i+1][j-1]
  // a...b 依赖 dp[i][j-1]  dp[i+1][j] 已经不是回文字符串了，不需要考虑
  // j >= i

  let result = str[0]; // 单个字母是回文，无论哪个字母都行

  const dp = Array.from(Array(len), () => Array(len).fill(false));

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (str[i] === str[j]) {
        if (j - i <= 2) {
          dp[i][j] = true;
          result = j - i + 1 > result.length ? str.slice(i, j + 1) : result;
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true;
          result = j - i + 1 > result.length ? str.slice(i, j + 1) : result;
        }
      }
    }
  }

  return result;
}

// @lc code=end

// 中心扩散法，分为偶数和奇数两种情况
var longestPalindrome = function (s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }

    const realM = m + 1;
    const realN = n - 1;
    const curLength = realN - realM + 1;
    if (curLength > res.length) {
      res = s.slice(m + 1, n); // slice不包括最后str[n]
    }
  }

  return res;
};
