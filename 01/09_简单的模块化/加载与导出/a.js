//require 方法有两个作用：
// 1.加载文件模块并执行里面的代码
// 2.拿到被加载文件模块导出的接口对象

// 每个模块文件中都提供了一个对象 exports
// exports 默认是一个空对象
//想要用外部文件的东西，必须将外部文件的成员挂载到exports中
var bExports = require('./b')

console.log(bExports.foo);   //hello

console.log(bExports.add(10,20));   //30
