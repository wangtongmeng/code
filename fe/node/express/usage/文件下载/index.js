var express = require("express");
var path = require("path");
var app = express();
app.get("/", function (req, res) {
  res.end("hello");
});
app.get("/download/jquery", function (req, res) {
  res.download(path.join(__dirname, "jquery.js"));
});

app.listen(3000);
