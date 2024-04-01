# http headers

headers 有很多，只讲一下最常用的，也是面试常考的。

## request headers

浏览器发送请求时，传递给服务端的信息

- Accept 浏览器可接收的数据类型
- Accept-Encoding 浏览器可接收的压缩算法，如 gzip
- Accept-Language 浏览器可接收的语言，如 zh-CN
- Connection: keep-alive 一次 TCP 连接重复使用
- cookie
- Host
- User-Agent 浏览器信息
- Content-type 发送数据的类型，常见的有 application/json，application/x-www-form-urlencoded，multipart/form-data，text/plain 等（用 postman 可演示）

## response headers

- Content-Type 返回的数据类型，对应 Accept
- Content-Length 数据大小
- Content-Encoding 压缩算法，如 gzip ，对应 Accept-Encoding
- Set-Cookie

## 示例

看百度首页，html 请求，js 请求，图片请求等

用 postman ，演示 request headers 里的 Content-type

## 自定义 header

有些接口需要前端调用时，加一个自定义的 header 。
如 axios 中自定义 headers http://www.axios-js.com/docs/#Request-Config

## 其他

关于缓存的 header ，后面会统一讲

Response headers

- Cache-Control
- Etag
- Expires
- Last-Modified

Request headers

- If-Modified-Since
- If-None-Match

面试时，这些和缓存有关的 header 也可以单独说。不要和其他的混在一起，本来就挺乱的。
