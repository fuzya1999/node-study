var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//1.连接数据库
//itcast  指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast');

//2.设计集合结构（表结构）
//字段名称就是表结构的属性名称
//值
//约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    username:{
        type:String,
        required:true  //必须有
    },
    password:{
        type:String,
        required:true  //必须有
    },
    email:{
        type:String,
    }
});

//3.将文档结构发布为模型
//   mongoose.model方法就是用来将一个架构发布为 model
//   第一个参数：传入一个大学名词单数字符串，用来表示你的数据库名称
//           mongoose 会自动将大写名词的字符串 生成 小写复数 的集合名称
//           例如：这里的 User 会变成users集合名称
//   第二个参数：架构Schema
//     返回值：模型构造函数
var User = mongoose.model('User', userSchema);

//4.当有了模型构造函数，就可以使用User中的数据为所欲为了（增删改查）
//  4.1增加
// var admin = new User({
//     username: 'zzn',
//     password: '234567',
//     email: 'zzn@zzn.com'
// });
//
// admin.save(function (err, ret) {
//     if (err) {
//         console.log('保存失败')
//     }else {
//         console.log('保存成功')
//         console.log(ret)
//     }
// })

//  4.2查询数据
//  4.2.1 查询所有数据 (即便只有一个也放在数组里面)
// User.find(function (err, ret) {
//     if (err) {
//         console.log('查询失败')
//     }else {
//         console.log(ret)
//     }
// })

//  4.2.2 按条件查询数据 (即便只有一个也放在数组里面)
// User.find({
//     username:'zzn'
// },function (err, ret) {
//     if (err) {
//         console.log('查询失败')
//     }else {
//         console.log(ret)
//     }
// })


//4.2.3 查询第一个 （不放在数组里）
// User.findOne(function (err, ret) {
//     if (err) {
//         console.log('查询失败')
//     }else {
//         console.log(ret)
//     }
// })

//4.2.4 查询符合条件的第一个 （不放在数组里）
// User.findOne({
//     username:'zzn',
//     password:'234567'
// },function (err, ret) {
//     if (err) {
//         console.log('查询失败')
//     }else {
//         console.log(ret)
//     }
// })


//  4.3更新数据
// User.findByIdAndUpdate('5f2e52adc310403bec42931f',{
//     password: '123'
// },function (err, ret) {
//     if (err) {
//         console.log('更改失败')
//     }else {
//         console.log('更改成功')
//         console.log(ret)
//     }
// })


//  4.4删除数据
// User.remove({
//     username:'zzn'
// },function (err, ret) {
//     if (err) {
//         console.log('删除失败')
//     }else {
//         console.log('删除成功')
//         console.log(ret)
//     }
// })
