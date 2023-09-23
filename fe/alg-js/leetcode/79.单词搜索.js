/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length === 0 ) {
    return false
  }
  if (word.length === 0) {
    return true
  }
  function find(i, j, wordIndex) {
    if (i >= row || i < 0) {
      return false
    }
    if (j >= col || j < 0) {
      return false
    }
    let letter = board[i][j]
    if (letter !== word[wordIndex]) {
      return false
    }
    //  如果board中的字母和word对应索引的字母相等，且word索引是最后一个了，则找到了
    if (wordIndex === word.length - 1) {
      return true
    }
    board[i][j] = null // 选择board中的字母，并置为null
    // 找到一个就找下一个
    const ret = find(i + 1, j, wordIndex + 1) ||
                find(i - 1, j, wordIndex + 1) ||
                find(i, j + 1, wordIndex + 1) ||
                find(i, j - 1, wordIndex + 1)
    board[i][j] = letter // 回撤
    return ret
  }

  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = find(i, j, 0) // 0 是word的第一个字母索引
      if (ret) {
        return ret
      }
    }
  }
  return false
};
// @lc code=end

