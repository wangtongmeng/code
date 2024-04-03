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
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a); // 优先匹配g的值比较大的哪一个
  s.sort((a, b) => a - b); // s从小到大，尽可能匹配到最大g重复利用资源
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const gIndex = g.findIndex((item) => item <= s[i]);
    if (gIndex >= 0) {
      res++;
      g.splice(gIndex, 1);
    }
  }

  return res;
};

// var findContentChildren = function (g, s) {
//     // g 2 1
//     // s 3 2 1
//     g = g.sort((a, b) =>  b - a);
//     s = s.sort((a, b) => b -a);

//     let res = 0;
//     let sIndex = 0;
//     for(let i =0; i<g.length; i++) {
//         if(s[sIndex] >= g[i] && sIndex < s.length) {
//             res++;
//             sIndex++
//         }
//     }

//     return res;
// }
// @lc code=end
