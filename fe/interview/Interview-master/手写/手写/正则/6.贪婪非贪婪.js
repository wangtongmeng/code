// *?：零次或多次匹配，尽可能少地匹配。
// +?：一次或多次匹配，尽可能少地匹配。
// ??：零次或一次匹配，尽可能少地匹配。
// {n,m}?：匹配至少 n 次、最多 m 次，尽可能少地匹配。
// {n,}?：匹配至少 n 次，尽可能少地匹配。

// 输出<div>123</div>这种包裹的内容
let str = "<div><div>123</div><div><div>456</div></div></div>";

const reg = /<div>(?!<).*?<\/div>/g;
let res = str.match(reg); // ['<div>123</div>', '<div>456</div>']

// 本例中 所谓的几次，是指两个div包裹的内容有几个 <div>123</div>就匹配了三次
console.log(res);

// 贪婪匹配 *
const str = "abcabcabc";
const greedyRegex = /a.*?c/; // 使用非贪婪匹配
const lazyRegex = /a.*c/; // 使用贪婪匹配

console.log(str.match(greedyRegex)); // 输出: ["abc"]
console.log(str.match(lazyRegex)); // 输出: ["abcabcabc"]
