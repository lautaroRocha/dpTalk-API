const answersRouter = require('express').Router()
const handleAnswers = require("../../controllers/answersControllers")
const authToken = require("../../middleware/authToken")
const {ValidateAnswer} = require("../../models/answers")

answersRouter.get("/:questionId", handleAnswers.getAnswersFromQuestion)

answersRouter.post("/", [authToken, ValidateAnswer], handleAnswers.postAnswer)

answersRouter.patch("/like/:answerId", authToken, handleAnswers.likeAnswer)

answersRouter.patch("/dislike/:answerId", authToken, handleAnswers.dislikeAnswer)


module.exports = answersRouter;