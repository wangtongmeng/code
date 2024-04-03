/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  //   3 2 1 4 7
  // 1 0 0 1 1 1
  // 2 0 1 1 1 1
  // 3 1 1 1 1 1
  // 2 1 2 2 2 2
  // 1 1 2 3 3 3

  // dp[i][j]
  // nums1[i]等于nums2[j] 时 dp[i][j] = dp[i-1][j-1]+1;
  // ！！！ nums1[i]不等于nums2[j] 时，因为最长重复子数组要求连续，此刻不想等就中断了，不予考虑
  // ！！！而子序列不要求连续，要考虑不相等的情况，dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
  // dp数组初始化，如果只初始dp[0][0]，后面的值都递推不出来
  // 所以初始化 dp[i][0]都等于0， dp[0][j]都等于0,改变i和j的含义==>对应到数组的下标为i-1和j-1

  let res = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  // 声明dp数组并初始化
  const dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        res = dp[i][j] > res ? dp[i][j] : res;
      }
    }
  }
  console.log(dp);

  return res;
};
// @lc code=end
