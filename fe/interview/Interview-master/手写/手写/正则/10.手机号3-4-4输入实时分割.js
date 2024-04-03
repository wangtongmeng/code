// 123 => 123
// 1234 => 123-4
// 12345 => 123-45
// 123456 => 123-456
// 1234567 => 123-4567
// 12345678 => 123-4567-8
// 123456789 => 123-4567-89
// 12345678911 => 123-4567-8911

const formatMobile = (mobile) => {
  return String(mobile)
    .slice(0, 11)
    .replace(/(?<=\d{3})\d+/, ($0) => "-" + $0)
    .replace(/(?<=[\d-]{8})\d{1,4}/, ($0) => "-" + $0);
};

console.log(formatMobile(123)); // 123
console.log(formatMobile(1234)); // 123-4
console.log(formatMobile(12345)); // 123-45
console.log(formatMobile(123456)); // 123-456
console.log(formatMobile(1234567)); // 123-4567
console.log(formatMobile(12345678)); // 123-4567-8
console.log(formatMobile(123456789)); // 123-4567-89
console.log(formatMobile(12345678911)); // 123-4567-8911

// (?<=...) 是正则表达式中的正向后行断言（Positive Lookbehind Assertion）。
const str = "Hello, World!";
const regex = /(?<=Hello, )\w+/;

const match = str.match(regex);
console.log(match); // 输出: ["World"]
