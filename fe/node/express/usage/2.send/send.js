var express = require("express");
var app = express();
app.get("/", function (req, res) {
  // res.send("hello world");
  // res.send({ user: "lisi" });
  // res.send([1, 2, 3]);

  // 当参数为一个Number时，并且没有上面提到的任何一条在响应体里，Express会帮你设置一个响应体，比如：200会返回字符"OK"
  // res.send(200); // OK
  // res.send(404); // Not Found
  res.send(500); // Internal Server Error
});
app.listen(3000);
