var fs = require('fs')

//第一个参数是要写入的  文件路径
//第二个参数是要写入的  文字内容
//第三个参数是         回调函数
//     error
//         成功 null
//         错误 错误对象

fs.writeFile('./data/你好.md','周震南最帅',function(error){
    if (error){
        console.log('写入失败');
    }else{
        console.log('文件写入成功');
    }

})