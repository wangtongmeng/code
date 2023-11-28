const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb://127.0.0.1:27017')


// const main = async () => {
//   await client.connect()
//   const db = client.db('test1')
//   const users = db.collection('users')
//   const res = await users.find()
//   console.log(await res.toArray());
// }
// main().finally(() => client.close())

const clientFun = async function(c) {
  await client.connect()
  const db = client.db('test1') // 数据库名称
  return db.collection(c)
}

const main = async () => {
  const users = await clientFun('users')

  // 查询集合全部
  // const res = await users.find()
  // console.log(await res.toArray());

  // 插入一条
  // const d = await users.insertOne({name: 'lisi', age: 18})
  // console.log(d);

  // 插入多条
  // const d = await users.insertMany([
  //   {name: 'user1', age: 1},
  //   {name: 'user2', age: 2},
  //   {name: 'user3', age: 3},
  //   {name: 'user4', age: 4},
  // ])
  // console.log(d);

  // 查询集合中的一条
  // const d = await users.findOne({age: {$gt: 15}})
  // console.log(d);

  // 更新集合中的一条
  // const d = await users.updateOne({age: {$gt: 15}}, {$set: {name: 'lisi-update'}})
  // console.log(d);

  // 更新集合中的多条
  // const d = await users.updateMany({age: {$lt: 15}}, {$set: {name: 'lisi-update'}})
  // console.log(d);

  // 删除集合中的一条
  // const d = await users.deleteOne({age: {$lt: 10}})
  // console.log(d);

   // 删除集合中的多条
   const d = await users.deleteMany({age: {$lt: 10}})
   console.log(d);
}
main().finally(() => client.close())