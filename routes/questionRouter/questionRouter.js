const questionRouter = require('express').Router()
const handleQuestions = require("../../controllers/questionControllers")
const {ValidateQuestion} = require("../../models/questions")
const authToken = require("../../middleware/authToken")

questionRouter.post("/", [authToken, ValidateQuestion], handleQuestions.askQuestion)
questionRouter.get("/",  handleQuestions.getQuestions)
questionRouter.get("/:questionId", handleQuestions.getOneQuestion)
questionRouter.patch("/:questionId", handleQuestions.setAsResolved)
questionRouter.get("/by/:username", authToken, handleQuestions.getQuestionsByUser)

module.exports = questionRouter;