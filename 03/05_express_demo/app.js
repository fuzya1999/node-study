//0.安装
//1.引包
var express = require('express');

//2.创建服务器应用程序
//   也就是原来的http.createServer
var app = express();

//在express中开放资源就是一个API的事
//公开指定目录
//只要这样做了，就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/public/',express.static('./public/'))
app.use('/static/',express.static('./static/'))

//在express中模板引擎也就是一个API的事

//当服务器收到get请求 / 时，执行回调处理函数
app.get('/',function (req, res) {
    res.end('hello express!')
});

app.get('/about',function (req, res) {
    res.end('你好，我是express!')
});

app.get('/aaa',function (req, res) {
    res.end(`<!doctype html>
             <html lang="en">
             <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
                 <title>Document</title>
             </head>
             <body>
              你好
             </body>
             </html>`)
             });

//相当于server.listen
app.listen(3000,function () {
    console.log('app is running at port 3000')
})
