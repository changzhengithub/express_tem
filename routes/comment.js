// 我的页面请求

var express = require('express')
var router = express.Router()

var CommentModel = require('../models/comment')

// 留言页面
router.get('/', function (req, res, next) {
  res.render('comment.html')
})

// 添加留言
router.post('/comments', function(req, res) {
  new CommentModel(req.body).save().then(function(data, err) {
    if (err) {
      return res.render('Not Found File')
    }
    // res.redirect('/')
    // res.send(data)
    // 返回给页面，让页面自己处理结果
    res.status(200).json({
      code: 200,
      message: '请求成功',
      data
    })
  })
})

// 删除留言
router.post('/delComment', function(req, res) {
  var nickname = req.body.nickname
  CommentModel.deleteOne({
    nickname
  }).then(function(data, err) {
    if (err) {
      return res.render('Not Found File')
    }
    res.status(200).json({
      code: 200,
      message: '删除成功',
      data
    })
  })
})

module.exports = router
