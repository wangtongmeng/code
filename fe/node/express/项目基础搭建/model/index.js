const mongoose = require('mongoose')
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test1')
}
main().then(res => {
  console.log('mongo连接成功');
}).catch(err => {
  console.log(err);
  console.log('mongo连接失败');
})

module.exports = {
  User: mongoose.model('User', require('./userModel'))
}