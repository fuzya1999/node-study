//用来获取机器信息
var os = require('os')
//用来操作路径的
var path = require('path')


//获取当前机器的CPU信息
console.log(os.cpus());

//获取当前机器的memory内存
console.log(os.totalmem());     //8488222720

//extname:extension name扩展名
console.log(path.extname('c:/a/b/c/d/hello.txt'));       //.txt
