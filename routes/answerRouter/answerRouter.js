const answersRouter = require('express').Router()
const postAnswer = require("../../controllers/answersControllers")
const authToken = require("../../middleware/authToken")

answersRouter.post("/", authToken, postAnswer)



module.exports = answersRouter;