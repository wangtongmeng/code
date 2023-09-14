let express = require('express')
let app = express()

app.get('/test', function(req, res) {
  let {wd, cb} = req.query
  res.end(`${cb}('今天的新闻内容')`)
})

app.listen(3000)