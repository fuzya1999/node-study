/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */


var Student = require('./students.js');
// Student.update({
//     id:1,
//     name:'展销三'
// },function (err) {
//     if (err) {
//         console.log('修改失败')
//     }
//     console.log('修改成功')
// })

//express提供一种更好的方式
//专门用来包装路由
//加载express是为了撞见router路由容器
var express = require('express');

//1.创建一个路由容器
var router = express.Router();

//2.把路由都挂载到router路由容器中
router.get('/students',function (req, res) {
        // //readFile 的第二个参数是可选的，传入utf8就是告诉他 把读取到的文件直接按照utf8编码
        // //除了这样来转换之外，也可以通过data.toString()的方式
        // fs.readFile('./db.json','utf8',function (err, data) {
        //     if (err) {
        //         return res.status(500).send('Server error')
        //     }
        //     res.render('index.html',{
        //         fruits:[
        //             '苹果',
        //             '香蕉',
        //             '橘子',
        //         ],
        //         //从文件中读取到的数据一定是字符串
        //         //手动转成对象再使用
        //         students: JSON.parse(data).students
        //     })
        //
        // })
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.render('index.html',{
            fruits:[
                '苹果',
                '香蕉',
                '橘子',
            ],
            students:students
        })
    })
    });

router.get('/students/new',function (req, res) {
    res.render('new.html')
    });

router.post('/students/new',function (req, res) {
    //1.获取表单数据
    console.log(req.body)

    //2.处理:将数据保存到 db.json文件中用以持久化
    //(1)先读取出来，转成对象
    //(2)然后往对象中 push 数据
    //(3)然后把对象转为字符串
    //(4)然后把字符串再次写入文件
    Student.save(req.body,function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })


    //3.发送响应


    });

router.get('/students/edit',function (req, res) {
    //1.在客户端的列表页中处理链接问题（需要有id参数）
    //2.获取要编辑的学生id
    //3.渲染编辑页面
    // console.log(req.query.id)
    Student.findById(parseInt(req.query.id),function (err,student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html',{
            student:student
        })

    })

});


router.post('/students/edit',function (req, res) {
    //1.获取表单数据
    //2.更新
    //3.发送响应
    // console.log(req.body)
    Student.update(req.body,function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
    });

router.get('/students/delete',function (req, res) {
    Student.delete(req.query.id,function (err) {
        if (err) {
            return res.status(500).send('Server error')
        }
        res.redirect('/students')
    })
    });

//3.把router导出
module.exports = router ;


// module.exports = function(app){
//     app.get('/students',function (req, res) {
//         //readFile 的第二个参数是可选的，传入utf8就是告诉他 把读取到的文件直接按照utf8编码
//         //除了这样来转换之外，也可以通过data.toString()的方式
//         fs.readFile('./db.json','utf8',function (err, data) {
//             if (err) {
//                 return res.status(500).send('Server error')
//             }
//             res.render('index.html',{
//                 fruits:[
//                     '苹果',
//                     '香蕉',
//                     '橘子',
//                 ],
//                 //从文件中读取到的数据一定是字符串
//                 //手动转成对象再使用
//                 students: JSON.parse(data).students
//             })
//
//         })
//
//     });
//
//     app.get('/students/new',function (req, res) {
//
//     });
//
//     app.get('/students/new',function (req, res) {
//
//     });
//
//     app.get('/students/new',function (req, res) {
//
//     });
//
//     app.get('/students/new',function (req, res) {
//
//     });
//
//     app.get('/students/new',function (req, res) {
//
//     });
//
//     app.get('/students/new',function (req, res) {
//
//     })
//
// };

