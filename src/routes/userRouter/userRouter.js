const usersRouter = require('express').Router()
const handleUsers = require("../../controllers/usersControllers")
const {ValidateUser} = require("../../models/user")
const authToken = require("../../middleware/authToken")


usersRouter.post("/signin", ValidateUser, handleUsers.addUser)

usersRouter.post("/login", handleUsers.logInUser)

usersRouter.get('/', handleUsers.getUsers)

usersRouter.get('/:username', handleUsers.getUserData)

usersRouter.patch('/profile-pic', authToken, handleUsers.updateProfilePicture)

usersRouter.post('/notification', authToken, handleUsers.sendNotification)

usersRouter.get('/notification/:user', authToken, handleUsers.getNotification)


module.exports = usersRouter;