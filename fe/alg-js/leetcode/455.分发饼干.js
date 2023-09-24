/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let i = 0
  const sortFunc = (a, b) => a - b
  g.sort(sortFunc)
  s.sort(sortFunc)
  s.forEach(n => {
    if (n >= g[i]) {
      i++
    }
  })
  return i

};
// @lc code=end

