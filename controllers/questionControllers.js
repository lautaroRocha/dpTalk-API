const Question = require("../models/questions")

async function askQuestion(req, res){
    const newQuestion = {
        author : req.body.author,
        title : req.body.title,
        body: req.body.body
    }
    try{
        const qstn = new Question(newQuestion);
        await qstn.save();
        res.json({youAsked : qstn})
    }catch(error){
        res.status(400).json(error.message)
    }
}

async function getQuestions(req, res){
    try{
        const questions = await Question.find();
        res.json(questions)
    }catch(error){
        res.status(400).json(error.message)
    }
} 

async function getOneQuestion(req, res){
    const questionId = req.params.questionId;
    try{
        const qstn = await Question.findOne({_id : questionId});
        res.json(qstn)
    }catch(error){
        res.status(400).json(error.message)
    }
}




module.exports = {getOneQuestion, getQuestions, askQuestion}