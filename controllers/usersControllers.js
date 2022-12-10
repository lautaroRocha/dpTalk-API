const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function getUsers(req, res){
    try{
        const users = await User.find();
        res.json(users)
    }catch(error){
        res.status(400).json(error.message)
    }
} 


async function addUser(req, res){
    const newUser =  {
        username : req.body.username,
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password, 10)
    }
    console.log(newUser)
    try{
        const user = new User(newUser);
        await user.save();
        res.json({newUser : user})
    }catch(error){
        res.status(400).json(error.message)
    }
} 

async function logInUser(req, res){
    const {username, password} = req.body
    const tryingUser = await User.findOne({username : username})
    if(!tryingUser){
        res.status(401).json({message : "No hay ningun usuario con ese usernamel"})
    }else{
        const validPass = bcrypt.compareSync(password, tryingUser.password)
        if(!validPass){
            res.status(401).json({message : "credenciales inválidas"})
        }else{
            const jsonToken = jwt.sign({tryingUser}, `${process.env.ACCESS_TOKEN_SECRET}`);
            res.json({token: jsonToken})
        }
} 
}

module.exports = {getUsers, addUser, logInUser}


