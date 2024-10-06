// 登录请求

var express = require('express')
var router = express.Router()

var User = require('../models/user')

// 注册
router.get('/register', function (req, res) {
  res.render('register.html')
})

// 注册接口
router.post('/register', function (req, res, next) {
  // 1、获取表单数据
  // 2、操作数据库
  // 3、发送响应
  var formData = req.body
  User.findOne({
    $or: [{
        email: formData.email
      },
      {
        nickname: formData.nickname
      }
    ]
  }, function (err, data) {
    // express提供一个方法： json
    // 接收一个对象，自动把对象转换成字符串再发送给浏览器
    if (err) {
      next(err)
    }
    if (data) {
      return res.status(200).json({
        err_code: 1,
        message: 'email or nickname is already exists'
      })
    }
    // 注册，添加到数据库中
    formData.password = md5(md5(formData.password))
    new User(formData).save(function (err, user) {
      if (err) {
        return res.status(500).json({
          err_code: 500,
          message: 'Server Error...'
        })
      }
      // 注册成功，使用session记录用户登录状态
      console.log(user)
      req.session.user = user
      res.status(200).json({
        err_code: 0,
        message: 'register success'
      })
    })
  })
})

module.exports = router
