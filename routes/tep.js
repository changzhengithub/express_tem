// 模板引擎

var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('tmp.html', {
    name: 'jack',
    age: 18,
    hobby: 'girl'
  })
})

module.exports = router
