const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true
    }, 
    title : {
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
    },
    askedOn : {
        type : Object,
        required: false,
        default: new Date().toJSON()
    }
})

const Question = mongoose.model('questions', questionSchema);


module.exports = Question;

