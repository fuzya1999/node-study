var http = require('http')
var fs = require('fs')

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
    fs.readFile('./template.html',function (err, data) {
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
            console.log(files)

            //2.2 根据 files 生成需要的 HTML 内容
            var content = ''
            files.forEach(function (item) {
                content += `<tr>
                                <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
                                <td class="detailsColumn" data-value="0"></td>
                                <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                              </tr>`
            })

            //2.3替换
            data = data.toString()
            data = data.replace('^_^',content)

            // 3. 发送解析替换过后的响应数据
            res.end(data)



        })
    })
})

server.listen(3000,function () {
    console.log('running...')
});
