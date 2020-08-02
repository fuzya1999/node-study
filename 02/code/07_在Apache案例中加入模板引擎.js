var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

var wwwDir = 'C:/Users/27532/Desktop/app/www'

// server.on('request',function (req, res) {
//     var url = req.url;
//     var filePath = 'index.html'
//     if (url !== '/') {
//         filePath = url
//     }
//     fs.readFile(wwwDir+filePath,function (err, data) {
//         if (err) {
//             res.end('404 Not Fond.')
//         }
//         res.end(data)
//     })
// })

server.on('request',function (req, res) {
    // var url = req.url;
    fs.readFile('./template-apache.html',function (err, data) {
        if (err) {
            return res.end('404 Not Fond.')
        }
        console.log('111')

        // //1.如何得到wwwDir目录列表中的文件名和目录名
        // //   fs.readdir
        // //2.如何将得到的文件名和目录名替换到 template.html中
        // //   模板引擎
        // //2.1 在 template.html 中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
        fs.readdir(wwwDir,function(err,files){
            if (err) {
                return res.end('Can not find www dir')
            }

            var htmlStr = template.render(data.toString(),{
                files :files
            })



            // 3. 发送解析替换过后的响应数据
            res.end(htmlStr)



        })
    })
})

server.listen(3000,function () {
    console.log('running...')
});
