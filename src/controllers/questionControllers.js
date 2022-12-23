const {Question} = require("../models/questions")


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
        res.status(505).json({message : "Hubo un error con nuestros servidores, intentá más tarde"})
    }
} 

async function getQuestionsByUser(req, res){
    const username = req.params.username;
    try{
        const questionsByUser = await Question.find({author : username})
        res.json(questionsByUser)
    }catch(error){
        res.status(500).json({message : 'Hubo un error, intentá de nuevo más tarde'})
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

async function setAsResolved(req, res){
    const questionId = req.params.questionId;
    try{
        const qstn = await Question.findOne({_id : questionId});
        qstn.status = true;
        await qstn.save();
        res.status(200).send({message : "Guardado"})
    }catch(error){
        res.status(500).send({message : error})    
    }
}




module.exports = {getOneQuestion, getQuestions, askQuestion, setAsResolved, getQuestionsByUser}