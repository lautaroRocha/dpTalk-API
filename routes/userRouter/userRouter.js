const usersRouter = require('express').Router;
const handleUsers = require("../../controllers/usersControllers")

usersRouter.post("/signin", handleUsers.addUser)



module.exports = usersRouter;