/**
 * redirect方法允许网址的重定向，跳转到指定的url并且可以指定status，默认为302方式。 语法
 * res.redirect([status], url);
 *
 * 示例
 * res.redirect("http://www.baidu.com");
 */
const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.end("hello");
});

app.get("/about", function (req, res) {
  res.redirect(302, "/new");
});

app.get("/new", function (req, res) {
  res.end("new");
});

app.listen(3000);
