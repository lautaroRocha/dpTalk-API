const Answer = require("../models/answers")

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

module.exports = postAnswer