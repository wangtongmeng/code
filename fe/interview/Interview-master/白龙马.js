// 请实现一个 cacheRequest 方法，保证当使用 Ajax 请求相同资源时，真实网络层中，
// 实际只发出一次请求（假设已存在 request 方法用于封装 Ajax 请求，
// 调用格式为：request(url, successCallback, failCallback)）。比如调用方代码如下：

```javascript
// a.js
cacheRequest('/user', data => {
    console.log('我是从 A 中请求的 user，数据为' + data)
}, err => {
    console.log('我是从A中抛出的错误', err)
    
})
// b.js
cacheRequest('/user', data => {
    console.log('我是从 B 中请求的 user，数据为' + data)
}, err => {
    console.log('我是从B中抛出的错误', err)​
​})
```;

const map = new Map();

async function cacheRequest(url, callback, errorCallback) {
  if (map.has(url)) {
    await map.get(url).req;
    return Promise.resolve(callback(map.get(url).res));
  }

  const req = request(url);
  map.set(url, { req });

  return req
    .then((res) => {
      map.set(url, { req, res });
      callback(res);
    })
    .catch((err) => {
      errorCallback(err);
    });
}
