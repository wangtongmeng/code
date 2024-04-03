document.body.addEventListener("click", function () {
  // 兼容处理
  var target = event.target || event.srcElement;
  // 判断是否匹配目标元素
  if (target.nodeName.toLocaleLowerCase() === "a") {
    console.log("当前点击的 a 标签: ", target);

    // 对捕获到的 a 标签进行处理，需要先禁止它的跳转行为
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      window.event.returnValue = true;
    }

    var url = target.getAttribute("href");
    const reg = /^https.*$/;

    console.log(reg.test(url));

    // if (target.getAttribute("target") === '_blank') {
    //     window.open(url)
    // } else {
    //     window.location.href = url
    // }
  }
});
