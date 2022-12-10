const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true,
        unique: true
    }, 
    tile : {
        type : String,
        required : true
    },
    body : {
        type : String,
        require : true
    },
    status : {
        type : Boolean,
        required : false,
        default : false
    }
})

const Question = mongoose.model('questions', questionSchema);



module.exports = Question;
