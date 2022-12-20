const usersRouter = require('express').Router()
const handleUsers = require("../../controllers/usersControllers")
const {ValidateUser} = require("../../models/user")

usersRouter.post("/signin", ValidateUser, handleUsers.addUser)

usersRouter.post("/login", handleUsers.logInUser)

usersRouter.get('/', handleUsers.getUsers)

usersRouter.get('/:username', handleUsers.getUserData)

module.exports = usersRouter;