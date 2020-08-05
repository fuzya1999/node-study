
var express = require('express');

var app = express();
var comments = [
    {
        name:'周震南',
        message:'今天天气不错！',
        dataTime:'2020-07-31',
    },{
        name:'邓伦',
        message:'今天天气不错！',
        dataTime:'2020-07-31',
    },{
        name:'马伯骞',
        message:'今天天气不错！',
        dataTime:'2020-07-31',
    },{
        name:'毛不易',
        message:'今天天气不错！',
        dataTime:'2020-07-31',
    },{
        name:'麻煜嫣',
        message:'今天天气不错！',
        dataTime:'2020-07-31',
    },{
        name:'何洛洛',
        message:'今天天气不错！',
        dataTime:'2020-07-31',
    },
]

app.use('/public/',express.static('./public/'));

// 配置使用 art-template 模板引擎
// 第一个参数，表示当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然外面这里不需要记载 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('html',require('express-art-template'));

// Express 为 Response 相应对象提供了一个方法：render
// render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有的视图文件都放到 views 目录中

app.get('/',function (req, res) {
    res.render('404.html')
})
app.get('/post',function (req, res) {
    res.send('post page')
})

app.listen(3000,function () {
        console.log('running...')
})
