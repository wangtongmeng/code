var express = require("express");
var app = express();
var path = require("path");

app.use(function (req, res, next) {
  console.log("全部匹配");
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  next();
});
app.use("/about", function (req, res, next) {
  console.log("只匹配/about");
  next();
});

app.use(function (req, res, next) {
  console.log(
    "日志",
    req.method,
    req.path,
    req.params,
    req.originalUrl,
    req.url
  );
  next();
});

app.get("/", function (req, res) {
  // 获取查询参数 http://localhost:3000/?a=1&b=2&c=3
  console.log("query", req.query); // { a: '1', b: '2', c: '3' }
  // 获取 host path
  console.log("host", req.host);
  console.log("path", req.path);
  res.end("welcome to 首页");
});

app.get("/:id/:name", function (req, res) {
  // params路径参数
  // http://localhost:3000/1/lisi
  res.send(req.params.id + " " + req.params.name); // 1 lisi
});

app.get("/about", function (req, res) {
  console.log("1");
  res.end("欢迎");
});

app.get("/signup", function (req, res) {
  res.end("注册");
});

app.get("/signin", function (req, res) {
  res.end("登录");
});

app.get("/signout", function (req, res) {
  res.end("退出");
});

app.all("*", function (req, res) {
  res.send("404");
});

app.listen(3000);
