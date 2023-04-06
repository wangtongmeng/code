var express = require("express");
var path = require("path");
var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
// app.engine("html", require("ejs").__express);

app.get("/", function (req, res) {
  res.render("index", { title: "你好" });
  // res.render("index.html", { title: "你好" });
});

app.listen(3000);
