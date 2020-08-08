var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itcast')

var Schema = mongoose.Schema;


var studentsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: Number,
        enum: [0,1],   //只能是0或1
        default:0
    },
    age:{
        type:Number,
    },
    hobbies:{
        type: String
    }

})


//直接导出模型构造函数
module.exports = mongoose.model('Student',studentsSchema)
