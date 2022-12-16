const {Answer} = require("../models/answers")



async function postAnswer(req, res){
    const newAnswer = {
        author : req.body.author,
        question : req.body.question,
        body: req.body.body
    }
    try{
        const answer = new Answer(newAnswer);
        await answer.save();
        res.json({youReplied : answer})
    }catch(error){
        res.status(400).json(error.message)
    }
}

async function getAnswersFromQuestion(req, res){
    const questionId = req.params.questionId
    try{
        const allAnswers = await Answer.find({question : questionId})
        res.json(allAnswers)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

module.exports = {postAnswer, getAnswersFromQuestion}