var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    console.log('收到了请求，请求路径是'+req.url);
    //req.socket.remoteAddress  :  用字符串表示的远程 IP 地址。例如 '74.125.127.100' 或 '2001:4860:a005::68'。如果 socket 被销毁了（如客户端已经失去连接）则其值为 undefined。
    //req.socket.remotePort  :  用数字表示的远程端口。例如 80 或 21。
    console.log('请求我的客户端的地址是：',req.socket.remoteAddress,req.socket.remotePort);



    // res.write('hello')
    // res.write('nodejs')
    // res.end()
    //上面的方法可以简写为res.end('hello nodejs')
    // res.end('hello nodejs')

    //根据不同的请求路径发送不同的响应结果
    //1.获取请求路径
    //   req.url获取到的是端口号之后的那一部分路径，也就是说所有url都是以 / 开头的
    //2.判断路径处理响应

    var ul = req.url
    if(ul === '/'){
        //响应内容只能是二进制数据或者字符串
        res.end('index page')
    }else if(ul === '/login'){
        res.end('login page')
    }else{
        res.end('404 Not Found.')
    }
})

//如果端口号是80，则可以直接登陆网址http://127.0.0.1，浏览器默认算口号80，除了80以外，均需要输入端口号，例http://127.0.0.1:3000/
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问');
})