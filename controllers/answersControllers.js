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
    const userId = req.body.userId;
    console.log(req.body)
    try {
        const data = await Answer.findById(req.params.answerId);
        if(!data.likes.includes(userId)){
            data.likes.push(userId);
            await data.save();
            res.send({ message: 'Like exitoso' });
        }else{
            const idxToRemove = data.likes.indexOf(userId);
            data.likes.splice(idxToRemove, 1)
            await data.save()
            res.send({ message: 'Like removido' });
        }
      } catch (error) {
        res.status(500).send({ message: 'Hubo un problema mandando tu opinión' });
      }
}

async function dislikeAnswer(req, res){
    const userId = req.body.userId;
    console.log(req.body)
    try {
        const data = await Answer.findById(req.params.answerId);
        if(!data.dislikes.includes(userId)){
            data.dislikes.push(userId);
            await data.save();
            res.send({ message: 'Disike exitoso' });
        }else{
            const idxToRemove = data.dislikes.indexOf(userId);
            data.dislikes.splice(idxToRemove, 1)
            await data.save()
            res.send({ message: 'Dislike removido' });
        }
      } catch (error) {
        res.status(500).send({ message: 'Hubo un problema mandando tu opinión' });
      }
}

module.exports = {postAnswer, getAnswersFromQuestion, likeAnswer, dislikeAnswer}