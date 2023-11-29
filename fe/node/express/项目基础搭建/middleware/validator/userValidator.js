const {body}  = require('express-validator')
const validate = require('./errorBack')
module.exports.register = validate([
  body('name')
  .notEmpty().withMessage('用户名不能为空').bail() // bail 如果验证通过才往下走
  .isLength({min: 3}).withMessage('用户名长度不能小于3'), 
  body('email')
  .notEmpty()
  .isEmail()
])