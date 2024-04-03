// 方法一：从左到右迭代，从高位判断，返回高位的大小结果 注意：仅适用于版本号各个位的位数相同
let versions = ["1.45.0", "1.5", "6", "2.3.4.5"];
versions = versions.sort((a, b) => {
  let arr1 = a.split(".");
  let arr2 = b.split(".");
  let i = 0;
  while (true) {
    let s1 = arr1[i];
    let s2 = arr2[i];
    i++;
    if (s1 == undefined || s2 == undefined) {
      return arr1.length - arr2.length;
    }
    if (s1 == s2) {
      continue;
    }
    return s1 - s2;
  }
});
