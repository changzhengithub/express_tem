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
    res.redirect('/')
  })
})

module.exports = router
