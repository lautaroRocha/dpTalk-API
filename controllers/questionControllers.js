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

module.exports = {askQuestion}