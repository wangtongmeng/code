let str = "A12B34C56";
let reg1 = /([A-Z])\d{2}/;
let reg2 = /([A-Z])\d{2}/g;

// 匹配到第一个就结束了，返回一个特殊数组，第一项是正则匹配到的第一个值，数组第二项开始依次是括号分组里配到内容，还有其他信息['A12', 'A', index: 0, input: 'A12B34C56', groups: undefined]
let match1 = str.match(reg1);
// 没有上面那么复杂，返回有的匹配值,['A12', 'B34', 'C56']
let match2 = str.match(reg2);

// 和match1类似
let exec1 = reg1.exec(str);
// reg2这个比较不同，reg2.exec(str)执行一次向后匹配一个，结果类型和match1类似。详情见下面的一道题
let exec2 = reg2.exec(str);

// ===========================
// ===========分组的概念========

const str = "abc123";
const regex = /(abc)(\d+)/;

const match = str.match(regex);
console.log(match); // 输出: ["abc123", "abc", "123"]
