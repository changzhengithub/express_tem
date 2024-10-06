// 登录请求

var express = require('express')

var User = require('../models/user')

var router = express.Router()

// 登录页
router.get('/login', function (req, res) {
  res.render('login.html', {
    title: '登录注册页'
  })
})


// 登录接口
router.post('/login', function (req, res, next) {
  // 1、获取表单数据
  // 2、操作数据库
  // 3、发送响应
  var formData = req.body
  User.findOne({
    $or: [{
        email: formData.email
      },
      {
        password: md5(md5(formData.password))
      }
    ]
  }, function (err, user) {
    // express提供一个方法： json
    // 接收一个对象，自动把对象转换成字符串再发送给浏览器
    if (err) {
      next(err)
    }
    // 判断是否登录
    if (!user) {
      return res.status(200).json({
        err_code: 1,
        message: 'email or password error'
      })
    } 
    // 登录成功
    req.session.user = user
    res.status(200).json({
      err_code: 0,
      message: 'login success'
    })
  })
})

// 退出登录
router.get('/logout', function (req, res) {
  // 清除登录状态
  // 跳转到登录也
  req.session.user = null
  res.redirect('/login')
})

module.exports = router
