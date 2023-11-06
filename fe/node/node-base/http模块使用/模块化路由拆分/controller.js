var fs = require('fs')

module.exports = {
  index (req, res) {
    // 处理首页请求
    fs.readFile('./index.html', 'utf-8', function(err, data) {
      res.write(data)
      res.end()
    })
  },
  user (postData, res) {
    // 业务逻辑代码
    console.log(postData);
  }
}