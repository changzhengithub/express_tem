// 设计留言表

// 连接数据库，设计表结构，发布模型

// 引入mongoose
var mongoose = require('mongoose')

// 连接数据库，post数据库不需要存在，当插入第一条时会自动创建
// mongoose.connect('mongodb://localhost/post')
mongoose.connect('mongodb+srv://xingchen:密码@mongotest.3kbmj.mongodb.net/?retryWrites=true&w=majority&appName=mongotest')

// 监听连接
const db = mongoose.connection

// 检查是否连接成功
db.on('error', function (error) {
  console.log('数据库连接失败：' + error)
})
db.on('open', function (error) {
  console.log('数据库连接成功')
})


var Schema = mongoose.Schema

// 设计留言表结构
var commentSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comment', commentSchema)
