const express = require("express");
const app = express();
app.get("/dosomething", (req, res) => {
  //https://localhost:3000/dosomething?param1=a&param2=b&cb=cb_1300000000
  const { cb, param1, param2 } = req.query;

  res.send(`${cb}(${JSON.stringify({ success: true, param1, param2 })})`);
});

const port = 3000;
app.listen(port, () => console.log("server is started on port " + port));
