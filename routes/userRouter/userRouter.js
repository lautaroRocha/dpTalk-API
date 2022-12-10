const usersRouter = require('express').Router()
const handleUsers = require("../../controllers/usersControllers")

usersRouter.post("/signin", handleUsers.addUser)

usersRouter.post("/login", handleUsers.logInUser)


module.exports = usersRouter;