// 首页请求

var express = require('express')
var router = express.Router()

// 引入留言表
var CommentModel = require('../models/comment')

console.log(CommentModel)

router.get('/', function (req, res, next) {
  
  // 从数据库中查找数据
  CommentModel.find().then(function(data, err) {
    if (err) {
      return res.status(500).send('Server Error')
    }

    console.log('列表数据', data)
    // 返回数据
    res.render('index.html', {
      comments: data
    })
  })
})



module.exports = router
