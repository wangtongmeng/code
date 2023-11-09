// 输入字符串s，以及其重复的次数，输出重复的结果，例如输入abc，2，输出abcabc

// 通过数组的join
function repeat(str, n) {
  return (new Array(n + 1)).join(str)
}

// 递归
function repeat(str, n) {
  if (n <= 1) {
    return str
  }
  return str + repeat(str, n - 1)
}

console.log(repeat('ab', 3)); // ababab