# Node+Express项目基础模板搭建

## 安装
```
npm install
```

## 启动
```
# 启动项目
npm run dev

# 或者 持续监听
npm run start
```

## 部署
```
1、把项目传到服务器对应目录
2、执行命令 npm i
3、启动mongodb服务 sudo systemctl start mongod
4、启动服务 pm2 start npm --name express -- run start / pm2 app.js
```