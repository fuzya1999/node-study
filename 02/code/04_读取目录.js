var fs = require('fs')

fs.readdir('C:/Users/27532/Desktop/app/www', function (err, files) {
    if (err) {
        return console.log('目录不存在')
    }
    console.log(files)
})
