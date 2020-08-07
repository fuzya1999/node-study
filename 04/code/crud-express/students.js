/*
 * students.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
var fs = require('fs')
var dbPath = './db.json'

/*
* 获取所有学生列表
* return[]
*/
exports.find = function (callback) {
    fs.readFile(dbPath,function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}


/*
* 添加保存学生
*/
exports.save = function (student,callback) {
    //(1)先读取出来，转成对象
    //(2)然后往对象中 push 数据
    //(3)然后把对象转为字符串
    //(4)然后把字符串再次写入文件
    fs.readFile(dbPath,function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        student.id = students[students.length-1].id + 1
        students.push(student)
        var fileData = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,fileData,function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

/*
* 根据id获取学生信息
*/
exports.findById = function (id,callback) {
    fs.readFile(dbPath,function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null,ret)
    })
}

/*
* 更新学生
*/
exports.update = function (student,callback) {
    fs.readFile(dbPath,function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //修改谁，把谁找出来
        //ES6中的数组方法：find
        //需要接受一个函数作为参数
        //当某个遍历项符合 item.id === student.id 条件的时候，find会终止遍历，同时返回遍历项
        student.id = parseInt(student.id)
        var stu = students.find(function (item) {
            return item.id === student.id
        })

        for (var key in student) {
            stu[key] = student[key]
        }

        var fileData = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,fileData,function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })

    })
}

/*
* 删除学生
*/
exports.delete = function (id,callback) {
    fs.readFile(dbPath,function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students

        //findIndex专门用来根据条件查找元素的下标
        var deleteId = students.findIndex(function (item) {
            return item.id === parseInt(id)
        })

        students.splice(deleteId,1)

        var fileData = JSON.stringify({
            students:students
        })

        fs.writeFile(dbPath,fileData,function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
