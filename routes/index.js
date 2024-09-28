// 首页请求

var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index.html', {
    title: '我是首页标题'
  })
})

module.exports = router
