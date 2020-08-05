var express = require('express')

var app = express()

// //当以 /public/ 开头的时候，去 ./public/目录中找对应的文件
// app.use('/public/',express.static('./public/'))

// //当省略第一个参数时，则可通过省略 /public 的方式来访问
// app.use(express.static('./public/'))

//必须是 /a/public目录中的资源具体路径
//把 /a/ 看作  /public/  的别称
//  http://127.0.0.1:3000/a/login.html
app.use('/a/',express.static('./public/'))


app.get('/',function (req, res) {
    // res.write('hello')
    // res.write('world')
    // res.end()

    //res.end('hello world')

    res.send('hello  world')
})

app.get('/aaa',function (req, res) {
    // res.write('hello')
    // res.write('world')
    // res.end()

    //res.end('hello world')

    res.send(`<!doctype html>
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
})




app.listen(3000,function () {
    console.log('express app is running ...')
})
