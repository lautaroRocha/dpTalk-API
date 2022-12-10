const usersRouter = require('express').Router()
const handleUsers = require("../../controllers/usersControllers")

usersRouter.post("/signin", handleUsers.addUser)

usersRouter.post("/login", handleUsers.logInUser)

usersRouter.get('/', handleUsers.getUsers)

module.exports = usersRouter;