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

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})

const userModel = mongoose.model("User", user) // 第一个参数如果数据库没有，则则会创建并加上s
const u = new userModel({name: 'lisi', age: 100})
u.save() // 写入数据库