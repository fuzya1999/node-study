var url = require('url')

var obj = url.parse('pinglun?name=dwqf&message=whuoioi',true)

console.log(obj)

console.log(obj.query)
