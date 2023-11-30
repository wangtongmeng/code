const { body } = require('express-validator')
const validate = require('./errorBack')
const { User } = require('../../model')
module.exports.register = validate([
  body('name')
    .notEmpty().withMessage('用户名不能为空').bail() // bail 如果验证通过才往下走
    .isLength({ min: 3 }).withMessage('用户名长度不能小于3').bail(),
  body('email')
    .notEmpty().withMessage('邮箱不能为空').bail()
    .isEmail().withMessage('邮箱格式不正确').bail()
    .custom(async val => {
      const emailValidate = await User.findOne({ email: val })
      if (emailValidate) {
        return Promise.reject('邮箱已被注册')
      }
    }).bail(),
  body('phone')
    .notEmpty().withMessage('手机号不能为空').bail()
    .custom(async val => {
      const phoneValidate = await User.findOne({ phone: val })
      if (phoneValidate) {
        return Promise.reject('手机号已被注册')
      }
    }).bail(),
  body('password')
  .notEmpty().withMessage('密码不能为空').bail()
  .isLength({ min: 5 }).withMessage('密码长度不能小于5').bail(),

])

module.exports.login = validate([
  body('email')
    .notEmpty().withMessage('邮箱不能为空').bail()
    .isEmail().withMessage('邮箱格式不正确').bail()
    .custom(async val => {
      const emailValidate = await User.findOne({ email: val })
      if (!emailValidate) {
        return Promise.reject('邮箱未注册')
      }
    }).bail(),
  body('password')
    .notEmpty().withMessage('密码不能为空').bail()
])