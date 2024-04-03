function getTypes(htmlStr) {
  const res = [];
  const reg = /<(?!\/).+>/g; // 匹配开始，忽略结束
  let matchArr = str.match(reg2);

  const res = new Set(matchArr); // 去重
  return res.size;
}

// 利用api
const allElement = document.getElementsByTagName("*");
const tags = [];
allElement.forEach((item) => {
  const tagName = item.tagName.toLowerCase();
  !tags.includes(tagName) && tags.push(tagName);
});
return tags.length;
