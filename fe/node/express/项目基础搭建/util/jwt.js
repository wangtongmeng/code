// const jwt = require('jsonwebtoken')
// var token = jwt.sign({foo: 'hello'}, '555')
// console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTcwMTMwMDI5OH0.BXfJUKYUSElBYf7PPrwhp5JiHOE2bCo6ATO42k9PC4I
// var jwts = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTcwMTMwMDI5OH0.BXfJUKYUSElBYf7PPrwhp5JiHOE2bCo6ATO42k9PC4I', '555')
// console.log(jwts); // { foo: 'hello', iat: 1701300298 }

const jwt = require('jsonwebtoken')
const {promisify}  = require('util')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
const {uuid} = require('../config/config.default')

module.exports.verifyToken = async (req, res, next) => {
  let token = req.headers.authorization
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    res.status(402).json({error: '请传入 token'})
  }
  try {
    let userInfo = await verify(token, uuid)
    console.log(userInfo);
    next()
  } catch (error) {
    res.status(402).json({error: '无效的token'})
  }
  
}

module.exports.createToken = async userInfo => {
  return await tojwt({userInfo}, uuid, {expiresIn: 60 * 60 * 24}) // 过期时间一天
}