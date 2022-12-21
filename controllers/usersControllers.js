const {User} = require("../models/user")
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
async function getUserData(req, res){
    const username = req.params.username;
    try{
        const user = await User.findOne({username : username});
        res.json(user)
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
    try{
        const user = new User(newUser);
        await user.save();
        res.json({newUser : user})
    }catch(error){
        let errMsg;
            if(error.code == 11000){
            errMsg = "Ya existe " + Object.keys(error.keyValue)[0] ;
            }else{
            errMsg = error.message;
            }
        res.status(400).json({message: errMsg })
    }
} 

async function logInUser(req, res){
    const {username, password} = req.body
    const tryingUser = await User.findOne({username : username})
    if(!tryingUser){
        res.status(401).json({message : "No hay ningun usuario con ese nombre"})
    }else{
        const validPass = bcrypt.compareSync(password, tryingUser.password)
        if(!validPass){
            res.status(401).json({message : "Contraseña incorrecta"})
        }else{
            const jsonToken = jwt.sign({tryingUser}, `${process.env.ACCESS_TOKEN_SECRET}`);
            res.json({token: jsonToken})
        }
} 
}

async function updateProfilePicture(req, res){
    const profilePicUrl = req.body.picture;
    const sentUsername = req.body.username
    console.log(profilePicUrl)
    try{
        const updateUser = await User.updateOne({username : sentUsername}, {profilePic : profilePicUrl})
        res.send(updateUser)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports = {getUserData, getUsers, addUser, logInUser, updateProfilePicture}


