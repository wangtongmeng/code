// 将手机号18379836654转化为183-7983-6654
const str = "18379836654";
const formatStr = str.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1-$2-$3");
console.log(formatStr);

// 这个和千分位符号 类似
let mobile = "18379836654";
let mobileReg = /(?=(\d{4})+$)/g;

console.log(mobile.replace(mobileReg, "-")); // 183-7983-6654
