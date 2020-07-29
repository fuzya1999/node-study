var http = require('http')
var server = http.createServer()
server.on('request',function(req,res){
    console.log('收到了请求，请求路径是'+req.url);
    var url = req.url
    if (url === '/products'){
        var products = [
            {
                name:'苹果',
                price:'8'
            },{
                name:'菠萝',
                price:'12'
            },{
                name:'辣椒',
                price:'2'
            },
        ]
        res.end(JSON.stringify(products))
    }
})
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问');
})