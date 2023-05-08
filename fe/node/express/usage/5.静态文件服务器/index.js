// 如果要在网页中加载静态文件（css、js、img），就需要另外指定一个存放静态文件的目录，当浏览器发出非HTML文件请求时，服务器端就会到这个目录下去寻找相关文件
// http://localhost:3000/doc.txt
//  http://localhost:3000/leaves.jpg
const express = require("express");
const path = require("path");

const app = express();

// app.use(express.static(path.join(__dirname, "/")));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);
