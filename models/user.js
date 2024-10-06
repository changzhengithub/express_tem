
// 设计用户表-暂时没用到

// 连接数据库，设计表结构，发布模型

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var Schema = mongoose.Schema


// 设计用户表结构
var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    dafault: '/public/img/avatar-default.png'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1]
  },
  birthday: {
    type: String
  },
  status: {
    type: Number,
    // 0 没有权限限制
    // 1 不可以评论
    // 2 不可以登录
    enum: [0, 1, 2],
    default: 0
  }

})

module.exports = mongoose.model('User', userSchema);