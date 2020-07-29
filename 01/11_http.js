var http = require('http')
var server = http.createServer()
server.on('request',function(req,res){
    //乱码则用下面这句话
    // res.setHeader('Content-Type','text/plain;charset=utf-8')
    // res.end('hello 大家好')

    var url  = req.url
    if(url === '/plain'){
        //text/plain就是普通文本
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('hello 大家好')
    }else if (url === '/html') {
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('<p>hello html</p>')
    }
})
server.listen(3000,function(){
    console.log('Server is running...');
})