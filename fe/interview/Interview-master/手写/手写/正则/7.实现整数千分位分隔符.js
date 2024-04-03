// 整数千分位分隔
// (?=(\d{3})+$)后面需要有n个(3个数字)直到结尾，这个?=真的绝了
function format(number) {
  var reg = /(\d)(?=(\d{3})+$)/g;
  return (number + "").replace(reg, "$1,");
}
