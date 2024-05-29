/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // # 退左边的字符，所有从右开始遍历，记录#的数量，如果为0，则比较当前字符是否相等。如果#不为0则跳过当前字符
  let sIndex = s.length - 1;
  let tIndex = t.length - 1;
  let sSkip = 0;
  let tSkip = 0;
  while (sIndex >= 0 && tIndex >= 0) {
    // 找到没有消除的字符
    while (s[sIndex] === "#") {
      sSkip++;
      sIndex--;
    }
    while (sSkip > 0) {
      sIndex--;
      sSkip--;
    }

    while (t[tIndex] === "#") {
      tSkip++;
      tIndex--;
    }

    while (tSkip > 0) {
      tIndex--;
      tSkip--;
    }
    if (s[sIndex] === t[tIndex]) {
      sIndex--;
      tIndex--;
    } else {
      return false;
    }
  }
  return sIndex === -1 && tIndex === -1;
};
// @lc code=end
