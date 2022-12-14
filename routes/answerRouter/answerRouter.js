const answersRouter = require('express').Router()
const handleAnswers = require("../../controllers/answersControllers")
const authToken = require("../../middleware/authToken")

answersRouter.get("/:questionId", authToken, handleAnswers.getAnswersFromQuestion)

answersRouter.post("/", authToken, handleAnswers.postAnswer)



module.exports = answersRouter;