var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'C:/Users/27532/Desktop/app/www'

server.on('request',function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile(wwwDir +'/index.html',function (err, data) {
            if (err) {
                //return有两个作用：1.方法返回值 2.阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }else if (url === '/a.txt') {
        fs.readFile(wwwDir +'/a.txt',function (err, data) {
            if (err) {
                //return有两个作用：1.方法返回值 2.阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }else if (url === '/index.html') {
        fs.readFile(wwwDir +'index.html',function (err, data) {
            if (err) {
                //return有两个作用：1.方法返回值 2.阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }else if (url === '/apple/login.html') {
        fs.readFile(wwwDir +'/apple/login.html',function (err, data) {
            if (err) {
                //return有两个作用：1.方法返回值 2.阻止代码继续往后执行
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
})

server.listen(3000,function () {
    console.log('running...')
})
