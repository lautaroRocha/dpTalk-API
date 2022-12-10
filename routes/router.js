const router = require('express').Router()
const usersRouter = require("./userRouter/userRouter")


router.use('/users', usersRouter)


module.exports = router