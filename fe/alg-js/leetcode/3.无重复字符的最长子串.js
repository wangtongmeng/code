/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 双指针 滑动窗口
  // left right 双指针，right指针右移直到重复，记录最大值
  // left指针右移，并删除前一个left指针，重复上述过程
  const set = new Set()
  const len = s.length
  let rightIndex = 0, maxLen = 0
  for (let leftIndex = 0; leftIndex < len; leftIndex++) {
    if (leftIndex != 0) {
      set.delete(s.charAt(leftIndex - 1))
    }
    while (rightIndex < len && !set.has(s.charAt(rightIndex))) {
      set.add(s.charAt(rightIndex))
      rightIndex++
    }
    maxLen = Math.max(maxLen, rightIndex - leftIndex)
  }
  return maxLen
};
// @lc code=end


// // 哈希集合，记录每个字符是否出现过
// const set = new Set();
// const len = s.length;
// // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
// let rightIndex = -1, maxLen = 0;
// for (let i = 0; i < len; i++) {
//     if (i != 0) {
//         // 左指针向右移动一格，移除一个字符
//         set.delete(s.charAt(i - 1));
//     }
//     while (rightIndex + 1 < len && !set.has(s.charAt(rightIndex + 1))) {
//         // 不断地移动右指针
//         set.add(s.charAt(rightIndex + 1));
//         rightIndex++;
//     }
//     // 第 i 到 rightIndex 个字符是一个极长的无重复字符子串
//     maxLen = Math.max(maxLen, rightIndex - i + 1);
// }
// return maxLen;

