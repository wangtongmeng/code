//  结束时触发一次，延迟执行
function debounce(fn, time) {
  let timer = null;
  return function () {
    // 每次触发，先清掉前面的，然后生成一个新的timeout
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // 箭头函数没有arguments对象，它是上面return的匿名函数的arguments
      // 谁调用return的这个方法，this就指向谁,arguments也是这个方法的参数；如果settimeout里面用的是function函数就始终指向window
      // 考一下控制台里console this输出什么
      fn.apply(this, arguments);
    }, time);
  };
}

debounce((a, b, c) => {
  console.log(a, b, c);
}, 1500)(1, 2, 3);
