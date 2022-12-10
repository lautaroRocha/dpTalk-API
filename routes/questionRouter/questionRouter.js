const questionRouter = require('express').Router()
const handleQuestions = require("../../controllers/questionControllers")
const authToken = require("../../middleware/authToken")

questionRouter.post("/", authToken, handleQuestions.askQuestion)



module.exports = questionRouter;