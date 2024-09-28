var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()


// 页面路由
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var tepRouter = require('./routes/tep')


// 配置body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 引入模板引擎，指定html文件渲染插件
app.engine('html', require('express-art-template'))

// 静态文件地址
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
// 模板引擎默认渲染目录
app.set('views', path.join(__dirname, 'views')) 

// 路由
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/tmp', tepRouter)

// 错误处理，上面所有use方法都无法调用时，跳转到404页面
app.use(function(req, res) {
  res.render('404.html')
})

// 统一进行请求错误处理 4个参数
app.use(function(err, req, res, next) {
  console.log(err)
  res.status(500).json({
    err_code: 500,
    message: err.message
  })
})

app.listen(3000, function () {
  console.log('server is running')
})
