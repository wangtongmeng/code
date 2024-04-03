// 123456789abcdefg...xyz   1-36
// a 的ascII 码是97
function getNums() {
  const nums = Array.from(Array(10), (e, i) => i);
  for (let i = 10; i < 36; i++) {
    nums.push(String.fromCharCode(i + 87));
  }

  return nums;
}

function transform36(num) {
  const numsArr = getNums();
  let result = "";

  if (!Number.isInteger(num)) {
    //浮点数判断，目前不支持小鼠
    console.warn("不支持小数转换");
    return num;
  }

  if (num === 0) {
    return "0";
  }

  while (num > 0) {
    const remainder = num % 36;
    result = numsArr[remainder] + result;
    num = Math.floor(num / 36);
  }

  return result;
}

function transform16(num) {
  const baseStr = "0123456789abcdef";

  if (num === 0) {
    return "0";
  }

  let result = "";

  while (num) {
    const cur = num % 16;
    result = baseStr[cur] + result; // 字符串拼接
    num = Math.floor(num / 16);
  }

  return result;
}
console.log(transform16(16));
