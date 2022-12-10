const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true
    }, 
    question : {
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
    repliedOn : {
        type : Object,
        required: false,
        default: new Date().toJSON()
    }
})

const Answer = mongoose.model('answers', answerSchema);


module.exports = Answer;
