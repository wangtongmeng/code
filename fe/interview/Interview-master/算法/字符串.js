/* eslint-disable */
// 获取最大不重复子串的长度
function getMaxLength(str) {
  const s = str.split("");
  let stack = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    const index = stack.indexOf(ele);
    if (index > 0) {
      stack.splice(0, index + 1);
    }
    stack.push(ele);
    max = Math.max(stack.length, max);
  }
  return max;
}

//有效括号
// 给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 关键判定规则，左侧括号都加入数组，右侧括号必须和数组最后一个闭合(符合删除这一对)
function isValidString(str) {
  const rules = { "(": " )", "{": "}", "[": "]" };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const ele = str[i];
    if (rules[ele]) {
      // 如果是左侧括号入栈
      stack.push(ele);
    } else if (ele !== rules[stack.pop()]) {
      // 如果是右侧符号，并且和栈内最后一个不匹配，则false (({{)
      return false;
    }
  }
  return stack.length === 0;
}

// 给出由小写字母组成的字符串 S ，重复项删除操作 会选择两个相邻且相同的字母，并删除它们。
// 在 S 上反复执行重复项删除操作，直到无法继续删除。
// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
function removeDuplicates(str) {
  let stack = [];
  for (let cur of str) {
    const prev = stack.pop();
    if (prev !== cur) {
      stack.push(...[prev, cur]);
    }
  }
  return stack.join("");
}

// 翻转字符串里的单词
// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，将翻转后单词间的空格减少到只含一个。
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// 最长公共前缀
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
var longestCommonPrefix = function (strs) {
  let strSort = strs.sort((a, b) => a.length - b.length);
  let strArr = strSort.map((item) => item.split(""));
  let shortest = strArr[0];
  let answer = [];
  for (let i = 0; i < shortest.length; i++) {
    const has = strArr.every((ele) => {
      return ele[i] === shortest[i];
    });
    if (has) {
      answer.push(shortest[i]);
    } else {
      return answer.join("");
    }
  }
  return answer.join("");
};

// 是否是回文字符串
function isPlalindrome(str) {
  return str.split("").reverse().join("") === str;
}
// 找出最长回文子串
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i);
    // 回文子串长度是偶数
    helper(i, i + 1);
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--;
      n++;
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m - 1 > res.length) {
      // 如果当前比已有的res长，则替换
      // slice也要取[m+1,n-1]这个区间
      res = s.slice(m + 1, n);
    }
  }
  return res;
};

// 版本号比较
// 输入：version1 = "1.01", version2 = "1.001"
// 输出：0
// 解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
var compareVersion = function (version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  while (arr1.length && arr2.length) {
    const num1 = Number(arr1.shift());
    const num2 = Number(arr2.shift());

    if (num1 > num2) {
      return 1;
    }
    if (num2 > num1) {
      return -1;
    }
  }
  if (arr1.length) {
    return arr1.every((item) => Number(item) === 0) ? 0 : 1;
  }
  if (arr2.length) {
    return arr2.every((item) => Number(item) === 0) ? 0 : -1;
  }
  return 0;
};

// JS实现将数字金额转换为大写人民币汉字
// ('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
// ('', '拾', '佰', '仟');
// ('', '万', '亿', '兆');
// ('角', '分', '毫', '厘');
// 未找到好的答案，我的思路如下：
// 12345.678 => [12345, 678] => [5,4,3,2,1] [6,7,8]
// [5,4,3,2,1] => ['伍','肆拾', '叁佰', '贰仟', '壹万'] => reverse().join('') 再加上后半段[6,7,8]即可

// url解析
// eg: https://www.jd.com/list?type=1&price=100&name=j
const httpReg2 = /^https?/g;
const domainReg = /\/\/.+com/g; //多了两个//符号，匹配到值后，slice(2)即可
const param = /\?.+/g; //同上多了一个问号

// 驼峰转下划线 testCase => test_case,  test-case => test_case
// 我的思路：
function underline(str) {
  const map = {
    A: "a",
    B: "b",
    // ...
    Z: "z",
  };
  // \B 匹配非边界，也就是不以大写字母结尾的大写字母
  str1 = str.replace(/([A-Z])\B/g, (matchVal) => "_" + map[matchVal]);
  return str1.replace(/\-([a-z])/g, "_$1");
}

// 输出()内的有效表达式
// (1+1)*2 => 1+1
// (12daf)(adsf1) => 12daf, adsf1
// ())或(())抛出错误
// 理解成有效括号那题的拓展

// str = abcdqwerabc1qdfgjab128ab21idaa
// function addTag(str, word), addTag(str, 'abcd')
// => <em>abcd</em>qwer<em>abc</em>1qdfgj<em>ab</em>128ab21id<em>a/em><em>a</em>

// 解决思路，我理解的，不一定是正确的
// 先考虑只包围abcd str.split('abcd').join('<em>abcd</em>')  ！！！
// 再对题目，以word为'ab'考虑，接下来的思路就是, add(str, 'ab'), str = 'ab131absdfaa'
// arr = str.split('ab').forEach(item => item.split('a'))生成二维数组
// ['','131','sdfaa']=>[[''], ['131'], ['sdf','','']]=>
// 给里面的数组 join('<em>a</em>')=>new Arr= ['', '131', 'sdf<em>abcd</em><em>abcd</em>']
// => 然后join外层数组 Arr.join('<em>ab</em>')即可

// 找出字符串中出现次数最多的字符
// 我的思路，不一定是最优，利用对象{'a': 3, 'b':4}统计字符和出现次数
// 其实不需要split也不需要第二次遍历key
function findMany(str) {
  const strArr = str.split("");
  const map = {};
  for (let i = 0; i < strArr.length; i++) {
    const ele = strArr[i];
    if (map[ele]) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
  }
  let max = 0;
  let maxVal = "";
  for (const key in map) {
    if (map[key] > max) {
      maxVal = key;
      max = map[key];
    }
  }
  return maxVal;
}
// 改进版
function findMany2(str) {
  let max = 0;
  let maxVal = "";
  const strArr = str.split("");
  const map = {};
  for (let i = 0; i < strArr.length; i++) {
    const ele = strArr[i];
    if (map[ele]) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
    if (map[ele] > max) {
      maxVal = ele;
      max = map[ele];
    }
  }
  return [maxVal, max];
}

// 给你一个“A2B3”这样的字符串，输出“AABBB”
let str = "A2B3";
str.replace(/[A-Z]\d/g, (matchVal) => {
  let val = "";
  for (let i = 0; i < matchVal[1] * 1; i++) {
    val += matchVal[0];
  }
  return val;
});
// 'C4(A(A3B)2)2' 接上题

// 写一个阿拉伯数字转中文的方法
// toChineseNum(2345) //  二千三百四十五
// toChineseNum(341205)//  三十四万一千二百零五
// toChineseNum(340001200567)//  三千四百亿零一百二十万零五百六十七

function toChineseNum(num) {
  // 单位数组
  var units = ["", "十", "百", "千", "万", "十万", "百万", "千万", "亿"];
  // 中文数字数组
  var nums = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

  // 翻转 2001 => '1002'
  const arr = num.toString().split("").reverse();

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    result[i] = current === "0" ? "零" : nums[current] + units[i];
  }

  result = result.reverse().join("");

  //将【零千、零百】换成【零】 【十零】换成【十】
  result = result.replace(/零(千|百|十)/g, "零").replace(/十零/g, "十");
  //合并中间多个零为一个零
  result = result.replace(/零+/g, "零");
  //将【零亿】换成【亿】【零万】换成【万】
  result = result.replace(/零亿/g, "亿").replace(/零万/g, "万");
  //将【亿万】换成【亿】
  result = result.replace(/亿万/g, "亿");
  //移除末尾的零
  result = result.replace(/零+$/, "");
  //将【零一十】换成【零十】
  //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
  //将【一十】换成【十】
  result = result.replace(/^一十/g, "十");
  return result;
}
