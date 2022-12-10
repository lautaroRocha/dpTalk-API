const router = require('express').Router()
const questionRouter = require('./questionRouter/questionRouter')
const usersRouter = require("./userRouter/userRouter")


router.use('/users', usersRouter)
router.use('/ask', questionRouter)


module.exports = router