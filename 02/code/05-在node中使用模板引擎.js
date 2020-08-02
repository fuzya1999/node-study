//art-template
//art-template不仅可以在浏览器中使用，也可以在node中使用

//在node中使用art-template模板引擎
//模板引擎最早就是诞生于服务器领域，后来才发展到了前端

//1.安装npm install art-template
//2.在需要使用的文件模块中加载art-template：require('art-template')
//   参数中art-template就是下载的包的名字
//   也就是说 install 的名字是什么 require中就是什么
//3.查文档，使用模板引擎API

var template = require('art-template')
var fs = require('fs')


fs.readFile('./tpl.html',function (err, data) {
    if (err) {
        return console.log('404 Not Find')
    }
    var ret = template.render(data.toString(),{
        name:'周震南',
        age:20,
        province:'重庆',
        hobbies:['音乐','篮球','动漫']
    })
    console.log(ret)
})

