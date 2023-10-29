// 实现一个jsonp函数


function jsonp(url) {
  return new Promise((resolve, reject) => {
    // 创建一个唯一的回调函数名
    const callbackName = 'jsonp_callback_' + Math.floor(Math.random() * 100000);

    // 创建一个 script 元素
    const script = document.createElement('script');

    // 设置 script 的 src 属性，包括 URL 和回调函数名
    script.src = url + '?callback=' + callbackName;

    // 在全局作用域中定义回调函数
    window[callbackName] = function(data) {
      // 执行完回调后，删除全局作用域中的回调函数和 script 元素
      delete window[callbackName];
      document.body.removeChild(script);

      // 解析获取到的数据
      resolve(data);
    };

    // 处理请求错误
    script.onerror = function() {
      delete window[callbackName];
      document.body.removeChild(script);
      reject(new Error('JSONP request failed'));
    };

    // 将 script 元素添加到页面中，开始请求数据
    document.body.appendChild(script);
  });
}

jsonp('https://example.com/api/data')
  .then(function(data) {
    // 在获取到数据后执行的操作
    console.log(data);
  })
  .catch(function(error) {
    // 处理错误
    console.error(error);
  });