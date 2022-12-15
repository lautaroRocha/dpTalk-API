const usersRouter = require('express').Router()
const handleUsers = require("../../controllers/usersControllers")
const authToken = require("../../middleware/authToken")

usersRouter.post("/signin", handleUsers.addUser)

usersRouter.post("/login", handleUsers.logInUser)

usersRouter.get('/', authToken, handleUsers.getUsers)

usersRouter.get('/:username', authToken, handleUsers.getUserData)

module.exports = usersRouter;