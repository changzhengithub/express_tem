var express = require('express')
var path = require('path')

// 页面路由
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

// 引入模板引擎，会自动找到views目录下的页面
app.engine('html', require('express-art-template'))

// 静态文件地址
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
// app.set('views', path.join(__dirname, './views/')) // 默认就是./views目录，模板引擎也会自动指定到views目录

// 路由
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000, function () {
  console.log('server is running')
})
