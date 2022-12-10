const router = require('express').Router()
const questionRouter = require('./questionRouter/questionRouter')
const usersRouter = require("./userRouter/userRouter")
const answersRouter = require("./answerRouter/answerRouter")


router.use('/users', usersRouter)
router.use('/ask', questionRouter)
router.use('/reply', answersRouter)


module.exports = router