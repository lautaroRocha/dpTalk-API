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

async function likeAnswer(req, res){
    const answerId = req.params.answerId
    try{
    const currentAnswer = await Answer.findOne({_id : answerId})
    let currentLikes = currentAnswer.likes
    let newLikes = currentLikes + 1;
    const answer = await Answer.updateOne({_id : answerId}, {likes : newLikes})
    res.json(answer)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

async function dislikeAnswer(req, res){
    const answerId = req.params.answerId
    try{
    const currentAnswer = await Answer.findOne({_id : answerId})
    let currentDislikes = currentAnswer.dislikes
    let newDislikes = currentDislikes + 1;
    const answer = await Answer.updateOne({_id : answerId}, {dislikes : newDislikes})
    res.json(answer)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {postAnswer, getAnswersFromQuestion, likeAnswer, dislikeAnswer}