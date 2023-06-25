// 后端服务不能获取hash值
var express = require("express");
var app = express();
app.get("/", function (req, res) {
  console.log("xxxx", req.url, req);
  res.send("测试hash");
});

app.get("/redirect", function (req, res) {
  res.redirect("/?a=1#b=2"); // 重定向时可以携带hash值
});

app.get("*", function (req, res) {
  console.log(req.url);
  res.send("404");
});
app.listen(3000);
