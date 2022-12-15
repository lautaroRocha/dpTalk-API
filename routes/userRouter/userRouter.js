const usersRouter = require('express').Router()
const handleUsers = require("../../controllers/usersControllers")
const authToken = require("../../middleware/authToken")

usersRouter.post("/signin", handleUsers.addUser)

usersRouter.post("/login", handleUsers.logInUser)

usersRouter.get('/', handleUsers.getUsers)

usersRouter.get('/:username', handleUsers.getUserData)

module.exports = usersRouter;