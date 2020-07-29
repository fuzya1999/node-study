//require是一个方法，用来加载模块

//在Node中，模块有三种：
//     具名的核心模块，例如 fs、http
//     用户自己编写的文件模块

//     相随路径必须加  ./
//     可以省略后缀名.js

//在Node中没有全局作用域，只有模块作用域：外部访问不到内部，内部也访问不到外部,默认都是封闭的

//


var foo = 'aaa'
console.log('a start');
require('./b.js')
console.log('a end');
console.log(foo);


//执行结果：
//   a start
//   b start
//   c.js文件被加载执行了
//   b end
//   a end
//   aaa